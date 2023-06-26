import React from 'react';
import {UniversalCheckBox} from "../../../UniversalCheckBox/UniversalCheckBox";

export const InStockFilter = () => {
    return (
        <div>
            <UniversalCheckBox callback={()=>{}} checkedStatus={false} />
            <span>в наличии</span>
        </div>
    );
};
