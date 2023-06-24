import React from 'react';
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={s.footer}>
           <div className={s.footerWrapper}>
               <span>Соцсети</span>
               <span>Ссылка на Git</span>
               <span>никто блац</span>
               <span>Другая информация</span>
           </div>
        </footer>
    );
};

