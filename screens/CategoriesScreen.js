import { View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';
import {  useLayoutEffect,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addVeganFood } from '../store/redux/veganMealSlice';


const CategoriesScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    useLayoutEffect(()=>{

        const veganList = MEALS
            .filter((meal) => meal.isVegan === true)
            .map(meal => meal.id);
        
        dispatch(addVeganFood(veganList));
    }, []);

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTitle 
                color={itemData.item.color}
                title={itemData.item.title} 
                onJPress={pressHandler} 
            />
        );
    }

    return (
        <FlatList data={CATEGORIES}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={renderCategoryItem} />
    );
}

export default CategoriesScreen;