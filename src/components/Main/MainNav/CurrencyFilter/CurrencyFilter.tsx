import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../Store/Store";
import {PriceFilterStateType, setPriceFilterAC} from "../../../../Store/PhoneReducer";
import {UniversalButton} from "../../../UniversalButton/UniversalButton";
import s from './CurrencyFilter.module.css'

export const CurrencyFilter = () => {

    const dispatch = useDispatch()
    const priceFilter = useSelector<RootStateType, PriceFilterStateType>(state => state.priceFilter)
    const [minValue, setMinValue] = useState<number>(priceFilter.min)
    const [maxValue, setMaxValue] = useState<number>(priceFilter.max)

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

