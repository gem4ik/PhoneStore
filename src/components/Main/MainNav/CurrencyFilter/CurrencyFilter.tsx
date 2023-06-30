import React, {useState} from 'react';
import {UniversalButton} from "../../../UniversalButton/UniversalButton";
import s from './CurrencyFilter.module.css'

export const CurrencyFilter = () => {

    // const dispatch = useDispatch()
    // const priceFilter = useSelector<RootStateType, PriceFilterStateType>(state => state.priceFilter)
    const [minValue, setMinValue] = useState<number>(100)
    const [maxValue, setMaxValue] = useState<number>(2000)
    //
    // const setPriceFilter = () => {
    //     dispatch(setPriceFilterAC(minValue, maxValue))
    // }

    return (
        <div className={s.priceFilterWrapper}>
            <div className={s.inputWrapper}>
                <input
                    onChange={()=>{}}
                    // onChange={(e)=>setMinValue(Number(e.currentTarget.value))}
                    type="number"
                    step={50}
                    value={minValue}/>
                <input
                    // onChange={(e)=>setMaxValue(Number(e.currentTarget.value))}
                    onChange={()=>{}}
                    type="number"
                    step={50}
                    value={maxValue}/>
            </div>
            <UniversalButton nameButton={'filter'} callback={()=>{}}/>
        </div>
    );
};

