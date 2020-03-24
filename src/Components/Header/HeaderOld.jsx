import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/296702.png';

const HeaderOld = (props) => {
    return (
        <div className={s.header}>
            <img src={logo} alt='logo' className={s.logo}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.userInfo}>
                        {props.ava && <div>{props.login}<img src={props.ava} alt="img" className={s.ava}/></div>}
                        <div><button onClick={props.logout}><i className="fas fa-door-open fa-lg"></i></button></div></div>
                    : <div className={s.loginIcon}><NavLink to={'/login'}>Login <i className="fas fa-cat fa-lg"></i></NavLink></div>
                }
            </div>
        </div>
    );
};

export default HeaderOld;