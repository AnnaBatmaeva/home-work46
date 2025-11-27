import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';

import Button from '../components/Button'

import { setFormData } from '../slices/dataUsersSlice';
import '../index.css'

const RegistrationSchema = object().shape({
    name: string()
        .min(2, "Занадто коротке ім'я")
        .max(50, "Занадто довге ім'я")
        .required("Обов'язкове поле"),

    email: string()
        .email('Неправильний формат електронної пошти')
        .required("Обов'язкове поле"),


    password: string()
        .min(8, 'Пароль повинен містити мінімум 8 символів')
        .required("Обов'язкове поле"),
});

export default function FormPage() {
    const dispatch = useDispatch();
    return (
        <div className='formContainer'>
            <h1>Звʼязатись з нами</h1>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={RegistrationSchema}
                onSubmit={(data, { setSubmitting }) => {
                    dispatch(setFormData(data))
                    console.log(setFormData());
                    console.log('Дані форми:', data);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='formStyle'>
                        <label>Name</label>
                        <Field type="text" name="name" placeholder="Ім'я" />
                        <ErrorMessage name="name" component="div" className="errorText"/>

                        <label>Email</label>
                        <Field type="email" name="email" placeholder="Електронна пошта" />
                        <ErrorMessage name="email" component="div"className="errorText" />

                        <label>Password</label>
                        <Field type="password" name="password" placeholder="Пароль" />
                        <ErrorMessage name="password" component="div" className="errorText" />


                        <Button typeButton="submit" disabledButton={isSubmitting}>Зареєструватися</Button>

                    </Form>
                )}
            </Formik>
        </div>

    )
}