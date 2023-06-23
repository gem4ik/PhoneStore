import React from 'react';
import {UniversalItemForm} from "../../UniversalItemForm/UniversalItemForm";
import s from "./HeaderBot.module.css"

export const HeaderBot = () => {
    return (
        <div className={s.headerBot}>
            <a href="">LOGO-IMG</a>
            <UniversalItemForm callback={()=>{}} nameButton={"Search"}/>
            <span>Сравнение</span>
            <span>Избраное</span>
            <span>Корзина</span>
            <span>Войти</span>
        </div>
    );
};

