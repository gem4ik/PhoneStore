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


            <div className={s.imgContainer}>
                {/*<img className={s.imgProduct} src="https://pngicon.ru/file/uploads/krasnyy-telefon.png" alt="PhoneIMG"/>*/}
            </div>



            <div className={s.infoContainer}>


                <h2 className={s.productTitle}>{`${productParam.brand} ${productParam.model}`}</h2>


                <div className={s.availability}>
                    <span>{productParam.availability ? 'В наличии' : 'Нет в наличии'}</span>
                </div>



                <div className={s.priceContainer}>


                    <span className={s.cardPriceProduct}>Цена: {productParam.price}</span>


                    <span className={s.favorite}>
        <UniversalCheckBox callback={() => {
        }} checkedStatus={false}/>
        <label htmlFor="favorite">В избранное</label>
      </span>
                </div>
                <div className={s.actionsContainer}>
                    <UniversalButton nameButton="Купить" callback={() => {
                    }}/>
                    <span className={s.compare}>
        <UniversalCheckBox callback={() => {
        }} checkedStatus={false}/>
        <label htmlFor="compare">Сравнить</label>
      </span>
                </div>
            </div>



        </div>
    );
};

