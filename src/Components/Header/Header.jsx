import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/c/c3/Aucas_logo.png" alt=""/>
        </header>
    );
}

export default Header;