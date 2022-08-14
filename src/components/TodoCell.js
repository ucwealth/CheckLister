import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';

const TodoCell = ({ text, isComplete }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(isComplete)
    const completeTask = (newValue) => {
        setToggleCheckBox(newValue)
        isComplete = newValue 
    }
    return (
        <View style={styles.cell}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={completeTask}
                style={styles.checkbox}
                boxType='square'
                onCheckColor='white'
                onFillColor='green'
                onTintColor='green'
            />
            { toggleCheckBox ?
            <Text style={styles.itemTextComplete}>
                {text}
            </Text> :
            <Text style={styles.itemTextInitial}>
                {text}
            </Text>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    cell: {
        height: 50,
        width: View.width,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 5,

    },
    checkbox: {
        width: 30,
        height: 30,
        tintColor: 'grey', 
        marginLeft: 10,
    },
    itemTextInitial: {
        marginLeft: 10,
        fontSize: 18,
        color: 'black',
    },
    itemTextComplete: {
        marginLeft: 10,
        fontSize: 18,
        color: 'green',
    }
})
export default TodoCell;