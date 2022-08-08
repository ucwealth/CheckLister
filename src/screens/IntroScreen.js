import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
const IntroScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.topView}/>
            <Image style={styles.topImage} source={require('../assets/images/note-img.png')} />
            <View style={styles.textView}>
                <Text style={styles.headerText}>Start enjoying a{"\n"} more organized{"\n"} life</Text>
                <Text style={styles.subText}>Plan, organize, track, in one visual,{"\n"} collaborative space</Text>
            </View>
            <View style={styles.buttonStyle}>
                <Button text="Get started"  onPress={() => navigation.navigate('ListPage')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topView: {
        backgroundColor: '#4B4DED',
        width: 667,
        height: 667,
        borderRadius: 667/2,
        position: 'absolute',
        top: -319,
        left:  -198,
        
    },
    topImage: {
        position: 'absolute',
        width: 292,
        height: 292,
        left: 52,
        top: 127,
        borderRadius: 292/2,
    },
    textView: {
        width: 336,
        height: 219,
        position: 'absolute',
        top: 441,
        left: 27, 
    },
    headerText: {
        flex: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        justifyContent: 'center'
    },
    subText: {
        flex: 1,
        justifyContent: 'center',
        color: 'grey',
        textAlign: 'center',
        fontSize: 15
    },
    buttonStyle: {
        position: 'absolute',
        top: 678,
        left: 106,
    }
});

export default IntroScreen;