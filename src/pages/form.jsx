import { useState, MouseEvent } from 'react'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';

// material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { setFormData } from '../slices/dataUsersSlice';
import '../index.css'


export default function FormPage() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        dispatch(setFormData(data))
    }
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='formContainer'>
            <h1>Звʼязатись з нами</h1>
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className='formContainer__inputs'>
                    <TextField
                        label="Fullname"
                        variant="filled"
                        {...register("Fullname", {
                            required: "Enter your name",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters"
                            }
                        })}
                        error={Boolean(errors.Fullname)}
                        helperText={errors.Fullname?.message}
                    />
                    <TextField
                        label="Email"
                        variant="filled"
                        {...register("Email", {
                            required: "Email required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email"
                            }
                        })}
                        error={Boolean(errors.Email)}
                        helperText={errors.Email?.message}
                    />
                    <FormControl sx={{ width: '30ch' }} variant="filled" error={Boolean(errors.Password)}>
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            {...register("Password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                },
                                pattern: {
                                    value: /^(?=.*[0-9])(?=.*[a-zA-Z]).+$/,
                                    message: "Password must include letters and numbers"
                                }
                            })} 
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>
                            {errors.Password?.message}
                        </FormHelperText>
                    </FormControl>
                    <Button variant="contained" type='submit'>Submit</Button>
                </div>

            </form>
        </div>

    )
}