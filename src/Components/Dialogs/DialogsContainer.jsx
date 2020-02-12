import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}
            />
        }
    }
    </StoreContext.Consumer>
};

const SuperDialogsContainer = connect()(Dialogs);

export default DialogsContainer;