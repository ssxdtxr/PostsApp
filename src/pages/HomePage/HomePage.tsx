import React, {useEffect, useState} from 'react';
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import {http} from "../../http/http";
import {IPost} from "../../types/IPost";
import {PostItem} from "../../components/PostItem/PostItem";
import styles from "./HomePage.module.scss"
import {IComment} from "../../types/IComment";

export const HomePage = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [loading, setLoading] = useState(true)
    const getPosts = async () => {
        const {data: response} = await http.get<IPost[]>('/posts')
        setPosts(response)
        setLoading(false)
    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <Layout>
            <Container>
                <h1>Posts List</h1>
                <div className={styles.posts}>
                    {
                        loading ? '1000000' : posts && posts.map(post => <PostItem post={post} key={post.id} />)
                    }
                </div>

            </Container>
        </Layout>
    );
};
