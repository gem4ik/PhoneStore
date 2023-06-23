import React from 'react';
import {UniversalButton} from "../../../UniversalButton/UniversalButton";





const Card = () => {
    return (
        <div>
            <span>Сравнить</span>
            <span>Изображение</span>
            <span>Строка с нобором характеристик</span>
            <span>Цена</span>
            <span>Наличие</span>
            <span>Избраное</span>
            <span>Купить</span>
<UniversalButton nameButton={"Купить"} callback={()=>{}}/>
        </div>
    );
};

export default Card;