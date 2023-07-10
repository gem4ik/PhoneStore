import React, {useState} from 'react';
import {UniversalButton} from "../../../UniversalButton/UniversalButton";
import s from './CurrencyFilter.module.css'
import {useDispatch} from "react-redux";
import {initialMaxValue, initialMinValue, setPriceFilterAC} from "../../../../Store/PhoneReducer";

export const CurrencyFilter = () => {

    const dispatch = useDispatch()

    const [minValue, setMinValue] = useState<number>(initialMinValue)
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue)

    const setPriceFilter = () => {
        dispatch(setPriceFilterAC(minValue, maxValue))
    }

    return (
        <div className={s.priceFilterWrapper}>
            <div className={s.inputWrapper}>
                <input
                    onChange={(e)=>setMinValue(Number(e.currentTarget.value))}
                    type="number"
                    step={50}
                    value={minValue}/>
                <input
                    onChange={(e)=>setMaxValue(Number(e.currentTarget.value))}
                    type="number"
                    step={50}
                    value={maxValue}/>
            </div>
            <UniversalButton nameButton={'filter'} callback={setPriceFilter}/>
        </div>
    );
};

