import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Start from './Start'
import Game from './Game'
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Start' screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen
        name="Start"
        component={Start}
      />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}