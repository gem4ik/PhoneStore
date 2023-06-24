import React from 'react';
import {useSelector} from "react-redux";
import {ExtendedPhonesType} from "../../../Store/PhoneReducer";
import {Card} from "./Card/Card";


export const MainContent = () => {
    let statePhone=useSelector<ExtendedPhonesType[],ExtendedPhonesType[]>(store=>store)
    return (
        <div>
            {statePhone.map(el=>{
               return  <Card  productParam={el} />
            })}
            Main content
            <span>МАПИМ телефоньчики!!!!</span>


        </div>
    );
};

