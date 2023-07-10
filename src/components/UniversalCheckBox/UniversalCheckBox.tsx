import React from 'react';

export type UniversalCheckBoxTypeProps = {
    callback: (name?: string) => void
    checkedStatus: boolean
    name?: string
}

export const UniversalCheckBox = (props: UniversalCheckBoxTypeProps) => {
    const {callback, checkedStatus, name} = props

    const onChangeHandler = () => {
        callback(name)
    }

    return (
        <div>
            <input
                onChange={onChangeHandler}
                type={"checkbox"}
                checked={checkedStatus}
            />
            {name && <span>{name}</span>}
        </div>
    );
};

