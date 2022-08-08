
import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Button from '../components/Button';

const Form = ({ submitHandler }) => {
    const [inputText, setInputText] = useState('')

    return (
        <View style={{ alignItems: 'center' }}>
            <TextInput 
            style={styles.input}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            placeholder="Enter your task"
            />
            <Button 
            text="Add to list" 
            onPress={() => submitHandler(inputText)} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 70,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,

    },
});

export default Form;