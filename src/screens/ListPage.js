import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View,
    Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import Navbar from '../components/Navbar';
import TodoCell from '../components/TodoCell';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BottomSheet } from 'react-native-btr';
import Form from '../components/Form';
import { SwipeListView } from 'react-native-swipe-list-view';

const ListPage = () => {
    const [todos, setTodos] = useState([]);
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    const addtoList = ( text ) => {
        if(text.length > 2) {
            setTodos((prevTodos) => {
                return [
                    ...prevTodos,
                    {id: Math.random().toString(), text: text, isComplete: false}
                ];
            })
        } else {
            Alert.alert('Your todo should be at least 3 characters long!')
        }
        toggleBottomNavigationView();
    }
    const renderItem = ({ item }) => (
        <TodoCell text={item.text} isComplete={item.isComplete} />          
    );
    const deleteItem = (rowKey) => {
        const newData = [...todos];
        const prevIndex = todos.findIndex(item => item.id === rowKey);
        newData.splice(prevIndex, 1);
        setTodos(newData);
    };
    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
            style={[styles.actionButton, styles.deleteBtn]}
            onPress={() => deleteItem(rowMap, data.item.id)}
            >
            <Text style={{ color: '#FFF' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView >
            <Navbar/>
            <View style={styles.profileView}>
                <Image source={require('../assets/images/avatar.png')} />
                <Text style={styles.nameText}>Hey, Sam</Text>
                <Text style={styles.numTask}>{todos.length} Tasks</Text>
            </View>
            <View style={styles.line} />
            { todos.length < 1 ? 
            <View style={styles.listStyle}>
                <Text style={styles.emptytext}>Click '+' button below to add tasks to your list</Text> 
            </View> :
            <SwipeListView
            data={todos}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={0}
            rightOpenValue={-105}
            previewOpenDelay={8000}
            style={styles.listStyle}
            />
            }
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={toggleBottomNavigationView}
            >
             <Icon name="add" size={40} style={styles.plus} />
            </TouchableOpacity> 
            <BottomSheet visible={visible} 
            onBackdropPress={toggleBottomNavigationView}
            onBackButtonPress={toggleBottomNavigationView}
            >
                <View style={styles.bottomsheet}>
                    <Form submitHandler={addtoList} />
                </View>
            </BottomSheet> 
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        width: SafeAreaView.width,
        marginHorizontal: 10, 
        height: 400,
    },
    profileView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    numTask: {
        color: 'gray',
        marginVertical: 10,
        fontSize: 16
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    buttonStyle: {
        backgroundColor: 'lightgray',
        width: 50,
        height: 50,
        borderRadius: 25,

        position: 'absolute',
        bottom: -53,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
    },
    bottomsheet: {
        backgroundColor: 'white',
        height: 300,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
    emptytext: {
        color: 'grey',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 200
        
    },
    actionButton: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
      },
      deleteBtn: {
        backgroundColor: 'red',
        right: 0,
      },
      rowBack: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        marginBottom: 5,
      },
});
export default ListPage;