import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, RootState, Status } from "../../../types/index";
import axios from "axios";

const USER_URL = 'https://jsonplaceholder.typicode.com/users';

interface UserStateType {
    users: User[];
    status: Status;
    error: string | null;
}

const initialState: UserStateType = {
    users: [],
    status: 'idle',
    error: null

}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (): Promise<User[] | undefined> => {
    
    const response = await axios.get(USER_URL);
    return response.data
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                if (action.payload) state.users = action.payload
                state.status = 'fulfilled';
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.error = 'Could not fetch users';
                state.status = 'rejected';
        })
    }
})

export default usersSlice.reducer
export const selectAllUsers = (state: RootState): User[] => state.users;
