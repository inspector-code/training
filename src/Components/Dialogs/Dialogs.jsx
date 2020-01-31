import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Artem"},
        {id: 2, name: "Vika"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Yana"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Angelina"}
    ];

    let messages = [
        {id: 1, message: "What the fck, maan?"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hello?! What a u doing"},
        {id: 4, name: "Yana"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Angelina"}
    ];

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;