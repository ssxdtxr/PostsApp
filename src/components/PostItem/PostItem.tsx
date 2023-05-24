import React, {FC, Fragment, useRef, useState} from 'react';
import {IPost} from "../../types/IPost";
import avatar from "./../../images/avatar.jpg"
import styles from "./PostItem.module.scss"
import { NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {Skeleton} from "../ui/Skeleton/Skeleton";
import {CommentItem} from "../CommentItem/CommentItem";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import {fetchPostComments} from "../../store/slices/postComments.slice";

interface IPostItem {
    post: IPost
}

export const PostItem: FC<IPostItem> = ({post}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const {comments} = useAppSelector(state => state.postComments)
    const dispatch = useAppDispatch()
    const {body, title} = post

    const getComments = async () => {
        setOpen(!open)
        setLoading(true)
        dispatch(fetchPostComments(post.id))
        setTimeout(() => {setLoading(false)}, 500)
    }

    return (
        <article className={styles.post}>
            <NavLink to={`/posts/user/${post.userId}`}>
                <div className={styles.img}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </NavLink>
            <div className={styles.post__data}>
                <NavLink to={`/posts/user/${post.userId}`}>
                    <div className={styles.title}>{title}</div>
                </NavLink>
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

