import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen'
import DefultScreen from './screens/DefultScreen'
import ForgotPSWScreen from './screens/ForgotPSWScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReportScreen from './screens/ReportScreen'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="DefultScreen" component={DefultScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUpScreen" component={SignUpScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="ReportScreen" component={ReportScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}
