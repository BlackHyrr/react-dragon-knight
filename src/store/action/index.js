import {
    COUPLE_ADD,
    COUPLE_SET_DRAGON,
    COUPLE_SET_ERROR,
    COUPLE_SET_KNIGHT,
    DRAGON_ADD,
    DRAGON_DELETE,
    DRAGON_SET_ERROR,
    DRAGON_SET_VALUE, KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_ERROR,
    KNIGHT_SET_VALUE
} from "../constant/action-type.js";

export const addDragon = () => ({
    type: DRAGON_ADD
})

export const setDragonName = (payload) => ({
    type: DRAGON_SET_VALUE,
    payload
})

export const setDragonError = (payload) => {
    return {
        type: DRAGON_SET_ERROR,
        payload
    }
}

export const deleteDragon = (payload) => {
    return {
        type: DRAGON_DELETE,
        payload
    }
}

export const setKnightInfo = (payload) => ({
    type: KNIGHT_SET_VALUE,
    payload
})

export const addKnight = () => ({
    type: KNIGHT_ADD
})

export const deleteKnight = (payload) => ({
    type: KNIGHT_DELETE,
    payload
})

export const setKnightError = (payload) => ({
    type: KNIGHT_SET_ERROR,
    payload
})

export const addCouple = () => ({
    type: COUPLE_ADD
})

export const setCoupleError = () => ({
    type: COUPLE_SET_ERROR
})

export const selectDragon = (payload) => ({
    type: COUPLE_SET_DRAGON,
    payload
})

export const selectKnight = (payload) => ({
    type: COUPLE_SET_KNIGHT,
    payload
})