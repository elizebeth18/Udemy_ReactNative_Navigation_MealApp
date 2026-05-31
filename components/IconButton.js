import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({ onJPress }) => {
    return(
        <Pressable onPress={onJPress}>
            <Ionicons name='star' color='white' size={24}/>
        </Pressable>
    );
}

export default IconButton;