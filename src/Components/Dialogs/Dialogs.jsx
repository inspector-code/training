import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../Utils/Validators/validators";

const Dialogs = (props) => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    const messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>);

    const addNewMessage = (values) => {
        if (values.newMessageBody) {
            props.sendMessage(values.newMessageBody);
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.messageText}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[maxLength100]}
                       name="newMessageBody"
                       placeholder='Enter ur message'/>
            </div>
            <div><button><div className={s.sendButton}><i className="far fa-paper-plane fa-2x"></i></div></button></div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;