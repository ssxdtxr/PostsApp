import React, {FC, useState} from 'react';
import {IPost} from "../../types/IPost";
import avatar from "./../../images/avatar.jpg"
import styles from "./PostItem.module.scss"
import {http} from "../../http/http";
import {IComment} from "../../types/IComment";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

interface IPostItem {
    post: IPost
}

export const PostItem: FC<IPostItem> = ({post}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [comments, setComments] = useState<IComment[]>([])
    const {body, title} = post

    const load = () => setTimeout(() => setLoading(true), 500)

    const getComments = async () => {
        setOpen(!open)
        const {data: response} = await http.get(`/comments/`, {params: {postId: post.id}})
        load()
        setComments(response)
    }

    return (
        <div className={styles.post}>
            <Link to={`/posts/${post.id}`}>
                <div className={styles.img}>
                    <img width={300} height={300} src={avatar} alt="avatar"/>
                </div>
            </Link>
            <h3>{title}</h3>
            <p>{body}</p>
            <Button variant="primary" onClick={() => getComments()} >Comments</Button>{' '}
            {
                open ?
                    <div className={styles.comments}>
                        {
                            !loading ?
                                <div className={styles.loading}>
                                    <h3>Loading...</h3>
                                </div>
                                :
                                comments.map(comment => (
                                    <div className={styles.comment}>
                                        <h3>{comment.email}</h3>
                                        <p>{comment.body}</p>
                                    </div>
                                ))
                        }
                    </div>
                    :
                    ''
            }
        </div>
    );
};

