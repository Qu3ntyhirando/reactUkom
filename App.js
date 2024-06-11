import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './assets/components/LoginScreen';
import HomeScreen from './assets/components/HomeScreen';
import CalculatorScreen from './assets/components/CalculatorScreen';
import DhikrScreen from './assets/components/DhikrScreen';
import GalleryScreen from './assets/components/GalleryScreen';
import ContactsScreen from './assets/components/ContactsScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="Dhikr" component={DhikrScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
