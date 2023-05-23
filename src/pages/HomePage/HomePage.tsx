import React, {Fragment, useEffect, useState} from 'react';
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import {PostItem} from "../../components/PostItem/PostItem";
import styles from "./HomePage.module.scss"
import {Skeleton} from "../../components/ui/Skeleton/Skeleton";
import {fetchPosts} from "../../store/slices/posts.slice"
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";

export const HomePage = () => {
    const [loading, setLoading] = useState(false)
    const {posts} = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setLoading(true)
        dispatch(fetchPosts())
        setTimeout(() => {setLoading(false)}, 500)
    }, [])
    return (
        <Layout title={"Posts App"}>
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
                            <>
                                {
                                    posts && posts.map(post => <PostItem post={post} key={post.id}/>)
                                }
                            </>
                    }
                </section>
            </Container>
        </Layout>
    );
};
