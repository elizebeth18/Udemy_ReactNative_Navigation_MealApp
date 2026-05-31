import { View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';



const CategoriesScreen = ({ navigation }) => {

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