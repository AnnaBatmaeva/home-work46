import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import postsReducer from './slices/postsSlice'
import dataUsersReducer from './slices/dataUsersSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    dataUsers: dataUsersReducer
  },
})

export default store