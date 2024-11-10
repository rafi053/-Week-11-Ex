import { configureStore } from "@reduxjs/toolkit";
import studentsReduser from './features/students/studentsSlice'

export const store = configureStore({
    reducer:{
        students:studentsReduser
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch