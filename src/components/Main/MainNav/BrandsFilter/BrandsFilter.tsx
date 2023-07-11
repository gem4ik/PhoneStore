import React from 'react';
import {
    addBrandToFilterAC,
    brandFilterReducer,
    removeBrandFromFilterAC,
    uniqueBrands
} from "../../../../Store/PhoneReducer";
import {UniversalCheckBox} from "../../../UniversalCheckBox/UniversalCheckBox";
import {useDispatch} from "react-redux";


export const BrandsFilter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            {uniqueBrands.map((el, i) => {
                const onCheckedHandler = (checkedStatus:boolean) => {
                    if (!checkedStatus){
                    dispatch(addBrandToFilterAC(el))}
                    else{
                        dispatch(removeBrandFromFilterAC(el))
                    }
                }
                return (
                    <UniversalCheckBox
                        key={i}
                        callback={()=>onCheckedHandler}
                        checkedStatus={false}
                        name={el}/>
                )
            })}
        </div>
    );
};