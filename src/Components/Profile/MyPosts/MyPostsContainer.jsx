import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {reset} from 'redux-form';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        photo: state.auth.small
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post));
            dispatch(reset('profileAddPostForm'));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;