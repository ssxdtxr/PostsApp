import React, {FC, Fragment, useRef, useState} from 'react';
import {IPost} from "../../types/IPost";
import avatar from "./../../images/avatar.jpg"
import styles from "./PostItem.module.scss"
import {http} from "../../http/http";
import {IComment} from "../../types/IComment";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {Skeleton} from "../ui/Skeleton/Skeleton";
import {CommentItem} from "../CommentItem/CommentItem";

interface IPostItem {
    post: IPost
}

export const PostItem: FC<IPostItem> = ({post}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [comments, setComments] = useState<IComment[]>([])
    const {body, title} = post

    const load = () => setTimeout(() => setLoading(false), 500)

    const getComments = async () => {
        setOpen(!open)
        setLoading(true)
        const {data: response} = await http.get(`/comments/`, {params: {postId: post.id}})
        load()
        setComments(response)
    }


    return (
        <article className={styles.post}>
            <Link to={`/posts/user/${post.userId}`}>
                <div className={styles.img}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </Link>
            <div className={styles.post__data}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{body}</p>
                <Button variant="primary" onClick={() => getComments()}>Comments</Button>{' '}
            </div>
            {
                open ?
                    <div className={styles.comments}>
                        {
                            loading ?
                                <div className={styles.loading}>
                                    {
                                        [...new Array(4)].map((_, index) => (
                                            <Fragment key={index}>
                                                <Skeleton className={styles.commentSkeletonTitle}/>
                                                <Skeleton className={styles.commentSkeletonText}/>
                                            </Fragment>
                                        ))
                                    }
                                </div>
                                :
                                <>
                                    {
                                        comments.map(comment => (
                                            <CommentItem comment={comment} key={comment.id}/>
                                        ))
                                    }
                                </>
                        }
                    </div>
                    :
                    ''
            }
        </article>
    );
};

