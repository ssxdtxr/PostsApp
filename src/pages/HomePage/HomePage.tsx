import React, {Fragment, useEffect, useState} from 'react';
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import {http} from "../../http/http";
import {IPost} from "../../types/IPost";
import {PostItem} from "../../components/PostItem/PostItem";
import styles from "./HomePage.module.scss"
import {Skeleton} from "../../components/ui/Skeleton/Skeleton";

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
                <section className={styles.posts}>
                    {
                        loading ?
                            [...new Array(8)].map((_, index) =>
                                <div className={styles.postSkeleton} key={index}>
                                    <Skeleton className={styles.postsSkeletonImage}/>
                                    <Skeleton className={styles.postsSkeletonTitle}/>
                                    <Skeleton className={styles.postsSkeletonBody}/>
                                    <Skeleton className={styles.postsSkeletonButton}/>
                                </div>
                            )
                            :
                            posts && posts.map(post => <PostItem post={post} key={post.id}/>)
                    }
                </section>

            </Container>
        </Layout>
    );
};
