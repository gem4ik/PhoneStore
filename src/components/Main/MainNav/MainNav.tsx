import React from 'react';
import s from "./MainNav.module.css";
import {InStockFilter} from "./InStockFilter/InStockFilter";
import {CurrencyFilter} from "./CurrencyFilter/CurrencyFilter";
import {BrandsFilter} from "./BrandsFilter/BrandsFilter";

export const MainNav = () => {
    return (
        <nav className={s.navWrapper}>
            <InStockFilter/>
            <CurrencyFilter/>
            <BrandsFilter/>
            <span>поиск по модели и чекбоксы с брендом</span>
            <span>Фильтр диагонали экранаа и чекбоксы с популярными диагоналями и селекты </span>
            <span>Долговечность заряда или емкость акамулятора фильтр анлогичен диагонали экрана</span>
            <span>Операционнная система чекбоксы</span>
        </nav>
    );
};