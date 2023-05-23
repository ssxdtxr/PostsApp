import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleWare from 'redux-saga'
import PostsReducer from "./slices/posts.slice";
import rootSaga from "./saga/root.saga";

const sagaMiddleware = createSagaMiddleWare()
const store = configureStore({
    reducer: {
        posts: PostsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store