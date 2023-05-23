import {configureStore} from "@reduxjs/toolkit";
import postsSlice from "./slices/posts.slice";
import userPostSlice from "./slices/userPost.slice";

const store = configureStore({
    reducer: {
        posts: postsSlice,
        userPosts: userPostSlice
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store