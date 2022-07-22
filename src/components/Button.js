import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = (props) => {
    const {title, onPressButton} = props
    return (
        <TouchableOpacity
          onPress={onPressButton}
        >
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button