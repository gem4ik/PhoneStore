import React from 'react';
import {brandFilterReducer, uniqueBrands} from "../../../../Store/PhoneReducer";
import {UniversalCheckBox} from "../../../UniversalCheckBox/UniversalCheckBox";
import {useDispatch} from "react-redux";



export const Brands = () => {
    const dispatch = useDispatch()
    return (
        <div>
            {/*{uniqueBrands.map((el, i)=> {*/}
            {/*    const onCheckedHandler = () => {*/}
            {/*        dispatch(brandFilterReducer(el))*/}
            {/*    }*/}
            {/*    return (*/}
            {/*        <UniversalCheckBox*/}
            {/*            key={i}*/}
            {/*            callback={onCheckedHandler}*/}
            {/*            checkedStatus={false} />*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    );
};