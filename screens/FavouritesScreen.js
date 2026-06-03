import { useSelector } from "react-redux";
import { View,Text, StyleSheet } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = () => {

    const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
    //console.log("favouriteMealsIds",favouriteMealsIds);

    const FavouriteMeals = MEALS.filter((meal) => {
        return favouriteMealsIds.includes(meal.id)
    });

    //console.log("FavouriteMeals",FavouriteMeals);

    if(favouriteMealsIds.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet.</Text>
            </View>
        )
    }

    return (
        favouriteMealsIds.length > 0 && <MealsList meals={FavouriteMeals} />
    );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});