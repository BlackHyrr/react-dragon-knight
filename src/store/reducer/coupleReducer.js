import {COUPLE_ADD, COUPLE_DELETE, COUPLE_SET_DRAGON, COUPLE_SET_ERROR, COUPLE_SET_KNIGHT} from "../constant/action-type.js";

const initialState = {
    selectedDragon: null,
    selectedKnight: null,
    couples: [],
    id: 1,
    error: ''
}

const coupleReducer = (state = initialState, action) => {
    switch (action.type) {

        case COUPLE_SET_DRAGON:
            return {
                ...state,
                selectedDragon: {...action.payload, available: true},
                error: ''
            }

        case COUPLE_SET_KNIGHT:
            return {
                ...state,
                selectedKnight: {...action.payload, available: true},
                error: ''
            }

        case COUPLE_ADD:
            if (state.selectedDragon && state.selectedKnight) {
                return {
                    ...state,
                    selectedDragon: null,
                    selectedKnight: null,
                    couples: [...state.couples, {id: state.id, dragon: state.selectedDragon, knight: state.selectedKnight}],
                    id: state.id + 1,
                    error: ''
                }
            } else {
                return {
                    ...state,
                    error: 'You must select a dragon and a knight before creating a couple.'
                }
            }

        case COUPLE_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case COUPLE_DELETE:
            return {
                ...state,
                couples: state.couples.filter((couple) => couple.id !== action.payload)
            }
        default:
            return state;
    }
}

export default coupleReducer;