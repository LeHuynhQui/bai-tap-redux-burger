import { combineReducers, createStore } from "redux";
import { BurgerReducer } from "./reducers/BurgerReducer"


const rootReducer = combineReducers ({
    BurgerReducer,
});

const store = createStore(rootReducer);

export default store;
