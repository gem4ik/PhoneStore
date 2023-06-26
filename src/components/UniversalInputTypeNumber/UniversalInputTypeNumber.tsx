import React, {ChangeEvent, useState} from 'react';

export type UniversalInputTypeNumberPropsType = {
    callback: () => void
    priceGap: number
}
export const UniversalInputTypeNumber = (props: UniversalInputTypeNumberPropsType) => {
    const {callback, priceGap} = props
    const [value, setValue] = useState<number>(priceGap)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       const value = parseInt(e.currentTarget.value)
        // не доделано !!!!!!!!!!!!!!!
    }

    return (
        <div>
            <input onChange={onChangeHandler} type={"number"}/>
        </div>
    );
};

