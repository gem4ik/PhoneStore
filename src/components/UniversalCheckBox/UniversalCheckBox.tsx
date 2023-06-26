import React from 'react';

export type UniversalCheckBoxTypeProps ={
    callback:()=>void
    checkedStatus:boolean
}

export const UniversalCheckBox = (props:UniversalCheckBoxTypeProps) => {
    const{callback,checkedStatus}=props

    const onChangeHandler=()=>{
        callback()
    }

    return (
        <div>
            <input onChange={onChangeHandler} type={"checkbox"} checked={checkedStatus}/>
        </div>
    );
};

