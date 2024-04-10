export const selectDragonName = (state) => state.dragonReducer.name
export const selectDragons = (state) => state.dragonReducer.dragons
export const selectDragonError = (state) => state.dragonReducer.error
export const selectNewKnight = (state) => state.knightReducer.newKnight
export const selectKnights = (state) => state.knightReducer.knights
export const selectKnightError = (state) => state.knightReducer.error

export const selectCouples = (state) => state.coupleReducer.couples
export const selectSelectedDragon = (state) => state.coupleReducer.selectedDragon
export const selectSelectedKnight = (state) => state.coupleReducer.selectedKnight
export const selectCoupleError = (state) => state.coupleReducer.error