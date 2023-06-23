import {createStore} from "redux";
import {PhoneReducer} from "./PhoneReducer";


export const store = createStore(PhoneReducer)