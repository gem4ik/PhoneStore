import React from 'react';
import {UniversalButton} from "../../../UniversalButton/UniversalButton";
import {ExtendedPhonesType} from "../../../../Store/PhoneReducer";

type CardPropsType={
    productParam:ExtendedPhonesType
}




export const Card = (props:CardPropsType) => {
    let {productParam}=props
    return (
        <div>
            <span>Сравнить</span>
            <span>Изображение</span>
            <span>{`${productParam.brand}+" "+${productParam.model}`}</span>
            <span>{productParam.price}</span>
            <span>{productParam.availability}</span>
            <span>Избраное</span>
            <span>Купить</span>
<UniversalButton nameButton={"Купить"} callback={()=>{}}/>
        </div>
    );
};

