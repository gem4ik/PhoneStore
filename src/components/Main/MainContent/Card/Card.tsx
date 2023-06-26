import React from 'react';
import {UniversalButton} from "../../../UniversalButton/UniversalButton";
import {ExtendedPhonesType} from "../../../../Store/PhoneReducer";
import s from "./Card.module.css"
import {UniversalCheckBox} from "../../../UniversalCheckBox/UniversalCheckBox";

type CardPropsType = {
    productParam: ExtendedPhonesType
}


export const Card = (props: CardPropsType) => {
    let {productParam} = props
    return (
        <div className={s.card}>

            <img className={s.imgProduct} src="https://alldect.ru/images/stories/virtuemart/product/spektr_308.jpg"
                 alt="PhoneIMG"/>
            <div className={s.infoCard}>
                <span>{`${productParam.brand} ${productParam.model}`}</span>
                <span>Наличие<UniversalCheckBox callback={()=>{}} checkedStatus={productParam.availability}/></span> <span>Сравнить<UniversalCheckBox callback={()=>{}} checkedStatus={false}/></span>
            </div>

            <div className={s.buyMenuCard}>
                <span className={s.cardPriceProduct}>Цена: {productParam.price}</span>
                <span>Избраное<UniversalCheckBox callback={()=>{}} checkedStatus={false}/></span>
                <UniversalButton nameButton={"Купить"} callback={() => {
                }}/></div>
        </div>
    );
};

