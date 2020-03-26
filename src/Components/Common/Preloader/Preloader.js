import preloader from "../../../assets/images/cat_preloader.svg";
import React from "react";
import s from "./preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={s.justify}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
};

export default Preloader;