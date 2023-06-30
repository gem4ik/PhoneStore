import React, {useState} from 'react';
import {UniversalCheckBox} from "../../../UniversalCheckBox/UniversalCheckBox";
import s from './InStockFilter.module.css'

export const InStockFilter = () => {
    const [checked, setChecked] = useState<boolean>(false)
    // const dispatch = useDispatch()
    // const changeInStockFilter = () => {
    //     setChecked(!checked)
    //     dispatch(setInStockFilterAC(!checked))
    // }
    return (
        <div className={s.filterWrapper}>
            <UniversalCheckBox callback={()=>{}} checkedStatus={checked} />
            <span>в наличии</span>
        </div>
    );
};
