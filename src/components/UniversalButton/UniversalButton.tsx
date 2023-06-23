import React from 'react';


type UniversalButtonTypeProps={
    nameButton:string
    callback:()=>void
}

export const UniversalButton = (props:UniversalButtonTypeProps) => {
    const {nameButton,callback}=props

    const onClickHandler=()=>{
        callback()
    }
    return (
        <button onClick={onClickHandler}>{nameButton}</button>
    );
};

