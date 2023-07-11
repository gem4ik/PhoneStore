import React, {ChangeEvent} from 'react';

export type UniversalCheckBoxTypeProps = {
    callback: (name?: string,checkedStatus?:boolean) => void
    checkedStatus: boolean
    name?: string
}

export const UniversalCheckBox = (props: UniversalCheckBoxTypeProps) => {
    const {callback, checkedStatus, name} = props

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        callback(name,e.currentTarget.checked)
    }

    return (
        <div>
            <input
                onChange={onChangeHandler}
                type={"checkbox"}
                checked={checkedStatus}
                id={name}
            /><b><label htmlFor={name}>{name}</label></b>
        </div>
    );
};

