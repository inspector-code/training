import React from "react";
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div>
                    <i className="fas fa-paw"></i>
                </div>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <i className="fas fa-envelope"></i>
                </div>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <i className="fas fa-cat"></i>
                </div>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <i className="fas fa-newspaper"></i>
                </div>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <i className="fas fa-guitar"></i>
                </div>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <div>
                    <i className="fas fa-cog"></i>
                </div>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;