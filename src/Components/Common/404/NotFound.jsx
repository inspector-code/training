import React from "react";
import gear from "../../../assets/images/Gear.svg"
import s from "./NotFound.module.css"

const NotFound = () => {
    return (
        <div className={s.notFoundBlock}>

            <img src={gear} alt="preloader"/>
            <div>404 Page not found... or not created</div>
        </div>
    )
};

export default NotFound;