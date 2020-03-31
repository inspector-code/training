import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.photoAndMessageBlock}>
                <div><img src="http://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt=""/></div>
                <div>{props.message}</div>
            </div>
            <div className={s.buttonsBlock}>
                <div className={s.likeButton}>
                    <i className="fas fa-heart"></i>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;