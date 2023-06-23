import React from 'react';
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <span>Соцсети</span>
            <span>Сылка на Git</span>
            <span>Кто делал</span>
            <span>Другая информация</span>
        </footer>
    );
};

