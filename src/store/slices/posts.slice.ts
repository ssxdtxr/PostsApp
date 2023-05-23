import {createSlice} from "@reduxjs/toolkit";
import {IPost} from "../../types/IPost";

interface IPostsState {
    posts: IPost[]
}

const initialState: IPostsState = {
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts(name) {
            return name
        },
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    }
})
export const {setPosts, getPosts} = postsSlice.actions

export default postsSlice.reducer