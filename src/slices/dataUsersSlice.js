import { createSlice } from '@reduxjs/toolkit'
const initialState = {}

export const dataUsersSlice = createSlice({
  name: 'dataUsers',
  initialState,
  reducers: {
    setFormData: (state, action) => action.payload,
  },
})

export const { setFormData } = dataUsersSlice.actions

export default dataUsersSlice.reducer