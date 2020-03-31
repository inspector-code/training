import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>).reverse();

    let onAddPost = (post) => {
        if (post.newPostText) {
            props.addPost(post.newPostText);
        }
    };

    return (
        <>
            <div className={s.sendPostBlock}>
                <div className={s.userAva}><img src={props.photo} alt="ava"/></div>
                <div className={s.postFormBlock}><AddPostFormRedux onSubmit={onAddPost}/></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </>
    );
};

const maxLength500 = maxLengthCreator(500);

const AddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={s.postForm}>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder='Enter ur post'
                       validate={[maxLength500]}/>
                <div><button>Add post</button></div>
            </div>
        </Form>
    )
};

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddNewPostForm);

export default MyPosts;