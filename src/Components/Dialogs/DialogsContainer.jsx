import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from "react";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }

};

let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <Dialogs {...props}/>
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
