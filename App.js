import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import HomeScreen from './Screens/HomeScreen';
import ISSLocationScreen from './Screens/ISSLocation';
import MeteorScreen from './Screens/Meteors';


import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "ISSLocation" component = {ISSLocationScreen}/>
        <Stack.Screen name = "Meteros" component = {MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;