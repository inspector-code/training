import React from "react";
import s from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <p className={s.fromMe}>{props.message}</p>
    )
};

export default Message;