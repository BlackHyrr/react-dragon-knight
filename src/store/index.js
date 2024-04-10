import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import coupleReducer from "./reducer/coupleReducer.js";
import { COUPLE_ADD, DRAGON_SET_UNAVAILABLE, KNIGHT_SET_UNAVAILABLE } from "./constant/action-type.js";


const coupleMiddleware = store => next => action => {
    if (action.type === COUPLE_ADD) {

        const { selectedDragon, selectedKnight } = store.getState().coupleReducer;

        console.log(store.getState())
        if (selectedDragon && selectedKnight) {
            store.dispatch({ type: DRAGON_SET_UNAVAILABLE, payload: selectedDragon.id });
            store.dispatch({ type: KNIGHT_SET_UNAVAILABLE, payload: selectedKnight.id });
        }
    }

    next(action);
};

const store = createStore(
    combineReducers({
        dragonReducer: dragonReducer,
        knightReducer: knightReducer,
        coupleReducer: coupleReducer
    }),
    composeWithDevTools(applyMiddleware(coupleMiddleware))
)


export default store