import React, {useState} from 'react';
import {UniversalCheckBox} from "../../../UniversalCheckBox/UniversalCheckBox";
import s from './InStockFilter.module.css'
import {useDispatch} from "react-redux";
import {setInStockFilterAC} from "../../../../Store/PhoneReducer";

export const InStockFilter = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const dispatch = useDispatch()
    const changeInStockFilter = () => {
        setChecked(!checked)
        dispatch(setInStockFilterAC(!checked))
    }
    return (
        <div className={s.filterWrapper}>
            <UniversalCheckBox callback={changeInStockFilter} checkedStatus={checked} name={'В Наличии'}/>
        </div>
    );
};
