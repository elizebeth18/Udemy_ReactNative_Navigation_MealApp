import { View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';

const renderCategoryItem = (itemData) => {
    return (<CategoryGridTitle color={itemData.item.color}
        title={itemData.item.title} />);
}

const CategoriesScreen = () => {
    return (
        <FlatList data={CATEGORIES}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={renderCategoryItem} />
    );
}

export default CategoriesScreen;