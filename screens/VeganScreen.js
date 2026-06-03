import { useSelector } from 'react-redux';
import { View, Text} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealsList from "../components/MealList/MealsList";

const VeganScreen = () => {

    const veganMealsIds = useSelector((state) => state.veganFoods.veganFoodList);
        //console.log("veganMealsIds",veganMealsIds);
    
        const VeganMeals = MEALS.filter((meal) => {
            return veganMealsIds.includes(meal.id)
        });

    return(
        veganMealsIds.length > 0 && <MealsList meals={VeganMeals} />
    )
}

export default VeganScreen;