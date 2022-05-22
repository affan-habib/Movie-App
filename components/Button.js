import React from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
const Button = ({iconName, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Icon name={iconName} size={22} color="white" style={{marginHorizontal: 20}} />
        </TouchableOpacity>
    )
}

export default Button