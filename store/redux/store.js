import { configureStore } from '@reduxjs/toolkit'
import favouriteMealsReducer from './favouriteMealSlice';
import veganFoodsReducer from './veganMealSlice';

export const store = configureStore({
    reducer: {
        favouriteMeals: favouriteMealsReducer,
        veganFoods: veganFoodsReducer,
    }
});