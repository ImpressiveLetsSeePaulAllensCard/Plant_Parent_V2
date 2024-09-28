import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import GardenScreen from './GardenScreen';
import BadgesScreen from './BadgesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Garden" component={GardenScreen} />
        <Stack.Screen name="Badges" component={BadgesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
