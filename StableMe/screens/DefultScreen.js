import React, { Component } from 'react'
import { View ,StyleSheet} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Row } from 'native-base';
import AccountScreen from './AccountScreen';
import RecordScreen from './RecordScreen';
import ReportScreen from './ReportScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpensesScren from './ExpensesScren';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default class DefultScreen extends Component {
    
    render() {
        
       
        return (
            
            
            <Tab.Navigator tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: '#16DB65',
                    height:65
                }
            }}>
                <Tab.Screen name="ReportScreen" component={ReportScreen} options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.root}>
                                 <Icon type="FontAwesome" name="align-center" style={{ color: focused ? 'black' : 'white' }} />
                                <Text style={{ color: focused ? 'black' : 'white',fontSize:15 }}>Report</Text>
                                
                            </View>
                        ),
                    }
                    
                } />
                <Tab.Screen name="ExpensesScren" component={ExpensesScren}
                    options={
                        {
                            tabBarIcon: ({ focused }) => (
                                <View style={styles.root}>
                                     <Icon type="FontAwesome" name="exchange" style={{ color: focused ? 'black' : 'white' }} />
                                    <Text style={{ color: focused ? 'black' : 'white',fontSize:15 }}>Exchange</Text>
                                </View>
                            )
                        }
                    } />
                <Tab.Screen name="RecordScreen" component={RecordScreen} options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.root}>
                                 <Icon type="FontAwesome" name="check" style={{ color: focused ? 'black' : 'white' }} />
                                <Text style={{ color: focused ? 'black' : 'white',fontSize:15 }}>Records</Text>
                            </View>
                        ),
                    }
                } />
                
                <Tab.Screen name="AccountScreenw" component={AccountScreen} options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.root}>
                                 <Icon type="FontAwesome" name="user" style={{ color: focused ? 'black' : 'white'}} />
                                <Text style={{ color: focused ? 'black' : 'white' ,fontSize:15}}>Account</Text>
                            </View>
                        ),
                    }
                } />
                
            </Tab.Navigator>
        
        )
    }
}

const styles = StyleSheet.create({
    root:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        
    }
})


