import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {http} from "../../http/http";
import {IPost} from "../../types/IPost";

interface IUserPostsState {
    userPosts: IPost[]
}

const initialState: IUserPostsState = {
    userPosts: []
}
export const fetchUserPost = createAsyncThunk<IPost[], string>(
    'posts/userPost',
    async (id) => {
        const {data} = await http.get<IPost[]>(`/posts/`, {params: {userId: id}})
        return data
    }
)

const userPostSlice = createSlice({
    name: 'userPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserPost.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.userPosts = action.payload
        })
    }
})

export default userPostSlice.reducer