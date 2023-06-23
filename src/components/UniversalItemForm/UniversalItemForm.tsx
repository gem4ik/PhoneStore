import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {UniversalButton} from "../UniversalButton/UniversalButton";


type UniversalItemFormPropsType = {
    callback: (title: string) => void
    nameButton:string
}

export const UniversalItemForm = (props: UniversalItemFormPropsType) => {
    const {callback,nameButton} = props
    const [value, setValue] = useState<string>("")
    let [error, setError] = useState<string | null>(null)
    const onKeyHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError("")
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            ClickCallback()
        }
    }
    const ClickCallback = () => {
        let newValue = value.trim()
        if (newValue === "") {
            setError("ERROR")
        } else {
            callback(newValue)
            setValue("")
        }
    }
    return (
        <div>
            <input value={value} onChange={onKeyHandler} onKeyDown={onKeyDownHandler}/>
            <UniversalButton nameButton={nameButton} callback={ClickCallback}/>
            {error && <div>{error}</div>}
        </div>
    );
};

