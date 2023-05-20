import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {http} from "../../http/http";
import {IPost} from "../../types/IPost";
import {Layout} from "../../components/layout/Layout";
import {Container} from "../../components/container/Container";
import styles from "./UserPage.module.scss"
import avatar from "./../../images/avatar.jpg"
import {PostItem} from "../../components/PostItem/PostItem";
import {Button} from "react-bootstrap";

export const UserPage = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState<boolean>(false)
    const [posts, setPosts] = useState<IPost[]>([])

    const getUserPost = async () => {
        const {data: response} = await http.get(`/posts/`, {params: {userId: id}})
        setPosts(response)
        setLoading(true)
        console.log(response)

    }

    useEffect(() => {
        getUserPost()
    }, [])
    return (
        <Layout>
            <Container>
                <NavLink to='/'>
                    <Button variant="primary">HomePage</Button>{' '}
                </NavLink>
                {
                    !loading ?
                        <div>loading...</div>
                        :
                        posts &&
                        <div>
                            <h1>Post UserID: {posts[0].userId}</h1>
                            <div className={styles.user}>
                                {
                                    posts.map(post => <PostItem post={post}/>)
                                }
                            </div>
                        </div>
                }
            </Container>
        </Layout>
    );
};

