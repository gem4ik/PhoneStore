import React from 'react';
import {UniversalCheckBox} from "../../../UniversalCheckBox/UniversalCheckBox";
import s from './InStockFilter.module.css'

export const InStockFilter = () => {
    return (
        <div className={s.filterWrapper}>
            <UniversalCheckBox callback={()=>{}} checkedStatus={false} />
            <span>в наличии</span>
        </div>
    );
};
