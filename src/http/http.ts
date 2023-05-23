import axios from "axios";
import {IPost} from "../types/IPost";

export const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const axiosPosts = async () => {
    return http.get<IPost[]>('/posts')
}