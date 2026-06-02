import {
    View, Text,
    Pressable, Image, StyleSheet,
    Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    const navigation = useNavigation();

    const onImagePressed = () => {
        navigation.navigate('MealDetails', {
            id: id,
            title: title
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Pressable
                    android_ripple={{ color: "grey", foreground: true }}
                    onPress={onImagePressed}
                >
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </Pressable>
            </View>
        </View>
    );
}


export default MealItem;


const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        elevation: 4,
        overflow: Platform === 'android' ? 'hidden' : 'visible',

        backgroundColor: 'white', //iphone for border shadow
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 }
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
});