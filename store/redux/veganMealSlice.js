import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    veganFoodList: []
}

const veganFoodSlice = createSlice({
    name: 'veganFoodsList',
    initialState,
    reducers: {
        addVegan: (state, action) => {
            console.log(action.payload)
            state.veganFoodList = [...state.veganFoodList, ...action.payload]
        }
    }
});

export const addVeganFood = veganFoodSlice.actions.addVegan;
export default veganFoodSlice.reducer;