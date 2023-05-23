import React, {Fragment, useEffect, useState} from 'react';
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import {IPost} from "../../types/IPost";
import {PostItem} from "../../components/PostItem/PostItem";
import styles from "./HomePage.module.scss"
import {Skeleton} from "../../components/ui/Skeleton/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/slices/posts.slice"

export const HomePage = () => {
    const [posts, setPostss] = useState<IPost[]>([])
    const [loading, setLoading] = useState(true)
    // const {} = useSelector(state => state)
    const dispatch = useDispatch()
    // const getPosts = async () => {
    //     const {data: response} = await http.get<IPost[]>('/posts')
    //     setPosts(response)
    //     setLoading(false)
    // }
    useEffect(() => {
        dispatch(getPosts())
        setLoading(false)
        // console.log(postsList)
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
