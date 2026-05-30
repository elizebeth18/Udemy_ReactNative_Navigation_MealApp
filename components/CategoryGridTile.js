import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = ({ title, color, onJPress }) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable android_ripple={{ color: 'red', foreground: true }}
                style={(pressed) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onJPress}
            >
                <View style={[styles.innerContainer]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        height: 150,
        elevation: 4,
        overflow: Platform === 'android' ? 'hidden' : 'visible',

        backgroundColor: 'white', //iphone for border shadow
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 }
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1, padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default CategoryGridTitle;