import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/296702.png';

const Header = (props) => {
    debugger;
    return (
        <div className={s.header}>
            <img src={logo} alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;