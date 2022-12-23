import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Button({ text, onPress }) {
  return (
      <Pressable onPress={onPress}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>{ text }</Text>
          </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 183,
        height: 55,
        borderRadius: 10,
        backgroundColor: '#4B4DED',
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
})