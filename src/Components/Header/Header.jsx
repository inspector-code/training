import React from 'react';
import s from './header.module.css';
import logo from '../../assets/images/296702.png';
import cn from 'classnames';

const Header = (props) => {
    return (
        <div className={cn(s.header, {[s.loginHeader]: !props.isAuth})}>
            <img src={logo} alt='logo' className={s.logo}/>
            {props.isAuth &&
            <div className={s.userInfo}>
                {props.ava && <div>{props.login}<img src={props.ava} alt="img" className={s.ava}/></div>}
                <div>
                    <button onClick={props.logout}><i className="fas fa-door-open fa-lg"></i></button>
                </div>
            </div>
            }
        </div>
    );
};

export default Header;