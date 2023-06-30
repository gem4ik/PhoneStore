import {combineReducers, createStore} from "redux";
import {
    phoneReducer,
    // batteryLifeFilterReducer,
    // brandFilterReducer,
    // inStockFilterReducer,
    // osFilterReducer,
    // priceFilterReducer,
    // screenSizeFilterReducer
} from "./PhoneReducer";

const rootReducer = combineReducers({
    phones: phoneReducer,
    // inStockFilter: inStockFilterReducer,
    // priceFilter: priceFilterReducer,
    // brandFilter: brandFilterReducer,
    // screenSizeFilter: screenSizeFilterReducer,
    // batteryLifeFilter: batteryLifeFilterReducer,
    // osFilter: osFilterReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)