import { View, Text, StyleSheet } from 'react-native';
import { useState,useEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealList/MealsList';

const FatFree = () => {

    const FatFreeMeal = MEALS.filter((meal) => meal.isVegetarian === true)

    console.log("fat free",FatFreeMeal.length)
    return (
        
            FatFreeMeal.length > 0 && <MealsList meals={FatFreeMeal} />
    );
}

export default FatFree;

const styles = StyleSheet.create({
    
})