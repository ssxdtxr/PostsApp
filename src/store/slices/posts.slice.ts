import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../types/IPost";
import {http} from "../../http/http";

interface IPostsState {
    posts: IPost[]
}

const initialState: IPostsState = {
    posts: []
}

export const fetchPosts = createAsyncThunk< IPost[], void >(
    'posts/getPosts',
    async () => {
        const {data} = await http.get<IPost[]>("/posts");
        return data;
    })

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
    }
})
export default postsSlice.reducer