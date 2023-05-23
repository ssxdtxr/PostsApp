import {put, call, fork, takeEvery} from 'redux-saga/effects'
import {axiosPosts} from "../../http/http";
import {getPosts, setPosts} from "../slices/posts.slice";
function* onLoadPostsAsync() {
    try {
        // @ts-ignore
        const response = yield call(axiosPosts)
        console.log(response)
        if (response.status === 200) {
            yield put(setPosts({...response.data}))
        }
    } catch (error) {
        console.log(error)
    }
}

function* getPostsSaga() {
    // @ts-ignore
    yield takeEvery(getPosts.type, onLoadPostsAsync())
}

export const postsSaga = [fork(getPostsSaga)]