import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../types/IComment";
import {http} from "../../http/http";
import {IPost} from "../../types/IPost";
import {fetchUserPost} from "./userPost.slice";

interface IPostComments {
    comments: IComment[]
}

const initialState: IPostComments = {
    comments: []
}
export const fetchPostComments = createAsyncThunk<IComment[], number>(
    'post/comments',
    async (id) => {
        const {data} = await http.get(`/comments/`, {params: {postId: id}})
        return data
    }
)

const postCommentsSlice = createSlice({
        name: 'postComments',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchPostComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload
            })
        }
    }
)

export default postCommentsSlice.reducer