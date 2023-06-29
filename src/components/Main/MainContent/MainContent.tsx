import React from 'react';
import {useSelector} from "react-redux";
import {ExtendedPhonesType, PriceFilterStateType} from "../../../Store/PhoneReducer";
import {Card} from "./Card/Card";
import s from "./MainContent.module.css"
import {RootStateType} from "../../../Store/Store";

export const MainContent = () => {


    const statePhone = useSelector<RootStateType, ExtendedPhonesType[]>(store => store.phones)

    const inStockFilter = useSelector<RootStateType, boolean>(state => state.inStockFilter)
    const priceFilter = useSelector<RootStateType, PriceFilterStateType>(state => state.priceFilter)


    const filteredPhones = statePhone
        .filter((phones) => phones.availability === inStockFilter)
        .filter((phones) =>  phones.price > priceFilter.min && phones.price < priceFilter.max)

    return (
        <div className={s.MainContent}>
            {filteredPhones.map(el => {
                return <Card productParam={el} key={el.id}/>
            })}

        </div>
    );
};

