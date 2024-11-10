import { createSlice, nanoid, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { Post, RootState, Status } from "../../../types";
import axios from "axios";

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';


interface PostStateType {
    post: Post[];
    status:Status;
    error: string | null;
    
}
   
const initialState: PostStateType =  { 
    post: [],
    status: 'idle', 
    error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (): Promise<Post[] | undefined> => {
    
    const response = await axios.get(POST_URL);
    return response.data
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action: PayloadAction<{ title: string; body: string; userId: string }>) => {
            state.post.push({
                id: nanoid(),
                title: action.payload.title,
                body: action.payload.body,
                userId: action.payload.userId,
                date: sub(new Date(), { minutes: 10 }).toISOString(),
               
            });
        }   
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                if (action.payload) state.post = action.payload
                state.status = 'fulfilled';
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.error = 'Could not fetch posts';
                state.status = 'rejected';
        })
    }
});

export const { postAdded } = postsSlice.actions
export default postsSlice.reducer