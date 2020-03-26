import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user_cat2.png"

const DialogItem = (props) => {

    return (
        <div className={s.dialog}>
                <img src={userPhoto} alt="avatar"/>
                <div className={s.userName}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
        </div>
    )
};

export default DialogItem;