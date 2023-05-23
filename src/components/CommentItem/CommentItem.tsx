import React, {FC, useRef, useState} from 'react';
import styles from "./CommentItem.module.scss";
import {IComment} from "../../types/IComment";
interface ICommentItem {
    comment: IComment
}
export const CommentItem: FC<ICommentItem> = ({comment}) => {
    const [toggle, setToggle] = useState<boolean>(false)
    const toggleFullComment = () => {
        setToggle(!toggle)
    }
    return (
        <article className={styles.comment} key={comment.id}>
            <div className={styles.title}>{comment.email}</div>
            <div className={toggle ? styles.activeData : styles.comment__data} onClick={toggleFullComment}>
                <p>{comment.body}</p>
            </div>
        </article>
    );
};

