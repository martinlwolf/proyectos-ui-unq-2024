import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const RoundBTN = ({children, style, onPress}) => {
    return (
        <TouchableOpacity style={[stylesbtn.roundbtn, style]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const stylesbtn = StyleSheet.create({
    roundbtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 50,
        width: 46,
        height: 46,
        backgroundColor: '#E7E7E8'
    }
})

export default RoundBTN;