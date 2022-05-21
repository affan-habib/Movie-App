import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
const Button = ({iconName, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Icon name={iconName} size={30} color="#0276b4" />
        </TouchableOpacity>
    )
}

export default Button;