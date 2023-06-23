import React from 'react';
import s from "./Main.module.css";
import {MainNav} from "./MainNav/MainNav";
import {MainContent} from "./MainContent/MainContent";

export const Main = () => {
    return (
        <main className={s.mainWrapper}>
            <MainNav/>
            <MainContent/>
        </main>
    );
};

