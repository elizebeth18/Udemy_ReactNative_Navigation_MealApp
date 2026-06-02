import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Button, Image, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavourite, removeFavourite } from "../store/redux/favouriteMealSlice";

const MealDetailScreen = ({ navigation, route }) => {
    const mealId = route.params.id;
    const mealName = route.params.title;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const favMealIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();

    const mealIsFavourite = favMealIds.includes(mealId);

    


    

    

    console.log(mealIsFavourite);

    const changeFavouriteStatusHandler = () => {

        if (mealIsFavourite) {
            console.log('inside remove changeFa()');
            dispatch(removeFavourite({ id: mealId }));
        } else {
            console.log('inside changeFa()');
            dispatch(addFavourite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavourite ? "star" : 'star-outline'} color="white"
                        onJPress={changeFavouriteStatusHandler}
                    />
                )
            }
        })
    }, [navigation, changeFavouriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{mealName}</Text>
            <View>
                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                />
            </View>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Cooking Instructions</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        textAlign: 'center',
        color: 'white',
        margin: 8,
        fontWeight: "bold",
        fontSize: 24
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    }
})