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
        {id: 6, name: "Angelina"},
    ];

    let messagesData = [
        {id: 1, message: "What the fck, maan?"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hello?! What a u doing"},
        {id: 4, name: "Yana"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Angelina"},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    );
};

export default Dialogs;