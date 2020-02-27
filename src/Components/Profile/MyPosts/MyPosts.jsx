import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (post) => {
        props.addPost(post.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder='Enter ur post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </Form>
    )
};

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;