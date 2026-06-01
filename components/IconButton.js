import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({ icon, color, onJPress }) => {
    return (
        <Pressable onPress={onJPress} android_ripple={{color: 'red', foreground: true}}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={icon} color={color} size={24} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        //opacity: 0.5,
        color: 'red',
    }
});