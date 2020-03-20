import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/296702.png';

const Header = (props) => {
    return (
        <div className={s.header}>
            <img src={logo} alt='logo' className={s.logo}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.userInfo}>
                        {props.ava && <div><img src={props.ava} alt="img" className={s.ava}/></div>}
                        <div>{props.login} - <button onClick={props.logout}>Logout</button></div></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;