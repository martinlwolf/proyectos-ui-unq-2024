import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomBTN = ({text, stylebtn, onPress}) => {
  return (
      <TouchableOpacity style={[styles.button, stylebtn]} onPress={onPress}>
          <Text style={[styles.buttonText, stylebtn.text]}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    }
})

export default CustomBTN