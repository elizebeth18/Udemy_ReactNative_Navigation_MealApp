import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ids: []
}

const favouriteMealsListSlice = createSlice({
    name: 'FavouriteMealsList',
    initialState,
    reducers: {
        addFavouriteMeal: (state, action) => {
            //console.log('inside add meal slice'+ action.payload.id);
            state.ids.push(action.payload.id)
        },
        removeFavouriteMeal: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavourite = favouriteMealsListSlice.actions.addFavouriteMeal;
export const removeFavourite = favouriteMealsListSlice.actions.removeFavouriteMeal;

export default favouriteMealsListSlice.reducer;