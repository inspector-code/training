import React from "react";
import s from './navbar.module.css';
import ava from './ava.jpeg';

let Sidebar = (props) => {
    let sidebarItem = props.friends.map(d => (<div className={s.friends}><div><img src={ava} alt="Friend"/></div><div>{d.name}</div></div>));

    return (
        <div>
            <div>Friends</div>
            {sidebarItem}
        </div>
    )
}

export default Sidebar;