import {createStore, combineReducers} from "redux";
import checkoutProcess from
"../checkoutProcess/checkoutReducer";

const rootReducer = combineReducers({ checkoutProcess });

export default createStore(rootReducer);

