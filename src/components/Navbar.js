import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
    return (
        <View style={styles.container}>
            <Icon name="description" size={30} color="#ccc" style={styles.file} />
            <Text style={styles.textStyle}>Inbox</Text>
            <Icon name="search" size={30} color="black" style={styles.searchIcon} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,

    },
    textStyle: {
        flex: 5,
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 2,


    },
    searchIcon: {
        flex: 1,
        marginTop: 2,

    },
    file: {
        flex: 1,
        marginLeft: 10,

    }
})
export default Navbar;