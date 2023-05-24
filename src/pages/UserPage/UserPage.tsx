import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {http} from "../../http/http";
import {IPost} from "../../types/IPost";
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import styles from "./UserPage.module.scss"
import {PostItem} from "../../components/PostItem/PostItem";
import {Button} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {fetchUserPost} from "../../store/slices/userPost.slice";
import {Skeleton} from "../../components/ui/Skeleton/Skeleton";

export const UserPage = () => {
    const {id} = useParams()
    console.log(id)
    const [loading, setLoading] = useState<boolean>(false)
    const {userPosts} = useAppSelector(state => state.userPosts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setLoading(true)
        dispatch(fetchUserPost(id as string))
        console.log(userPosts)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    return (
        <Layout title={`User Id: ${id}`}>
            <Container>
                <NavLink to='/'>
                    <Button variant="primary">HomePage</Button>{' '}
                </NavLink>
                <h1>Post UserID: {id}</h1>
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
                        userPosts &&
                        <div className={styles.user}>
                            {
                                userPosts.map(post => <PostItem post={post}/>)
                            }
                        </div>
                }
            </Container>
        </Layout>
    );
};

