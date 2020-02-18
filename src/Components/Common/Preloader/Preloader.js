import preloader from "../../../assets/images/Bean Eater-1s-200px.svg";
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