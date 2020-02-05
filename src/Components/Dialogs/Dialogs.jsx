import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMess();
    };

    let onMessageChange = () => {
        let textMessage = newMessage.current.value;
        props.updateNewMessageText(textMessage);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.dialogsPage.newMessageText}
                          ref={newMessage}
                          onChange={onMessageChange}/>

                <button onClick={addMessage}>Send mess</button>
            </div>
        </div>
    );
};

export default Dialogs;