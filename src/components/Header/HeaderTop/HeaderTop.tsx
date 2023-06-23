import React from 'react';
import s from "./HeaderTop.module.css";

export const HeaderTop = () => {
    return (
        <div className={s.headerTop}>
            <span>Location</span>
            <span>Акции</span>
            <span>Контакты</span>
            <span>Отзывы</span>
        </div>
    );
};

