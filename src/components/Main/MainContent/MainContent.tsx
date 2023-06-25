import React from 'react';
import {useSelector} from "react-redux";
import {ExtendedPhonesType} from "../../../Store/PhoneReducer";
import {Card} from "./Card/Card";
import s from "./MainContent.module.css"

export const MainContent = () => {
    let statePhone = useSelector<ExtendedPhonesType[], ExtendedPhonesType[]>(store => store)
    return (
        <div className={s.MainContent}>
            {statePhone.map(el => {
                return <Card productParam={el}/>
            })}

        </div>
    );
};

