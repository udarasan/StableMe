import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen'
import DefultScreen from './screens/DefultScreen'
import ForgotPSWScreen from './screens/ForgotPSWScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import EmailVerification from './screens/EmailVerification'
import RecordScreen from './screens/RecordScreen'
import AccountScreen from './screens/AccountScreen'
import ReportScreen from './screens/ReportScreen'
import ExpensesScren from './screens/ExpensesScren'
const Stack = createStackNavigator();

export default class App extends Component {

  constructor(props) {
    super()
    this.state = {
    }

  }



  render() {
    
    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ReportScreen" component={ReportScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ExpensesScren" component={ExpensesScren} options={{ headerShown: false }} />
          <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
      //<NavigationContainer>
      //   <Stack.Navigator>
      //   <Stack.Screen name="EmailVerification" component={EmailVerification} options={{ headerShown: false }} />
      //   <Stack.Screen name="ForgotPSWScreen" component={ForgotPSWScreen} options={{ headerShown: false }} />
      //   </Stack.Navigator>
      // </NavigationContainer>

    )
  }

}
