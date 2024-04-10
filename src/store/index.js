import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import coupleReducer from "./reducer/coupleReducer.js";
import { COUPLE_ADD, COUPLE_SET_ERROR } from "./constant/action-type.js";


/* const addCoupleMiddleware = (store) => (next) => (action) => {
    if (action.type !== COUPLE_ADD) {
        return next(action)
    }
    if(dragon === null || knight === null) {
        store.dispatch({
            type: COUPLE_SET_ERROR,
            payload: 'You must select a dragon and a knight before creating a couple.'
        });
        return;
    }
    
    store.dispatch({
        type: COUPLE_ADD,
        payload: { dragon, knight }
    });

    next(action)
} */

const store = createStore(
    combineReducers({
        dragonReducer: dragonReducer,
        knightReducer: knightReducer,
        coupleReducer: coupleReducer
    }),
    composeWithDevTools(applyMiddleware(addCoupleMiddleware),)
)


export default store