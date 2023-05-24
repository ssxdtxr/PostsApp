import {configureStore} from "@reduxjs/toolkit";
import postsSlice from "./slices/posts.slice";
import userPostsSlice from "./slices/userPosts.slice";
import postCommentsSlice from "./slices/postComments.slice";

const store = configureStore({
    reducer: {
        posts: postsSlice,
        userPosts: userPostsSlice,
        postComments: postCommentsSlice
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store