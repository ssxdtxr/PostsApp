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

export const UserPage = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const [posts, setPosts] = useState<IPost[]>([])
    const {userPosts} = useAppSelector(state => state.userPosts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id != null) {
            dispatch(fetchUserPost(id))
            console.log(userPosts)
            setTimeout(() => {setLoading(false)}, 500)
            setPosts(userPosts)
        }

    }, [])
    return (
        <Layout title={`User Id: ${id}`}>
            <Container>
                <NavLink to='/'>
                    <Button variant="primary">HomePage</Button>{' '}
                </NavLink>
                <h1>Post UserID: {posts[0].userId}</h1>
                {
                    loading ?
                        <div>loading...</div>
                        :
                        posts &&
                        <>
                            <div>
                                <div className={styles.user}>
                                    {
                                        posts.map(post => <PostItem post={post}/>)
                                    }
                                </div>
                            </div>
                        </>
                }
            </Container>
        </Layout>
    );
};

