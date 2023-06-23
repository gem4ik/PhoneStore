import React from 'react';
import s from "./Header.module.css";
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderBot} from "./HeaderBot/HeaderBot";

export const Header = () => {
    return (
        <header className={s.header}>
            <HeaderTop/>
            <HeaderBot/>
        </header>
    );
};

