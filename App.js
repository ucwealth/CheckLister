import React from 'react';
import { StyleSheet } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import ListPage from './src/screens/ListPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown:false }} />
        <Stack.Screen name="ListPage" component={ListPage} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;