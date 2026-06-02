import { configureStore } from '@reduxjs/toolkit'
import favouriteMealsReducer from './favouriteMealSlice';

export const store = configureStore({
    reducer: {
        favouriteMeals: favouriteMealsReducer
    }
});