import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Student } from "../../../types";
import { RootState } from "../../store";
import axios from "axios";

interface StudentStateType {
  students: Student[];
  status: Status;
  error: string | null;
}

const initialState: StudentStateType = {
  students: [],
  status: "idle",
  error: null,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;



export const featchStudent = createAsyncThunk('students/featchstudents',async (): Promise<Student[]|undefined> => {
  
      const response = await axios.get(BASE_URL);
      return response.data
  
  })

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(featchStudent.pending, (state) => {
        state.status = "pending";
        state.error = null
    })
    .addCase(featchStudent.fulfilled, (state, action) => {
        if (action.payload) state.students = action.payload;
        state.status = "fulfilled";
      })
      .addCase(featchStudent.rejected, (state) => {
        state.error = "Canno't fetch students";
        state.status = "rejected";
      })
  },
});

export default studentsSlice.reducer
