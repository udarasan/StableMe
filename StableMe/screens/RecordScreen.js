import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, ActionSheet, DatePicker, Button, Left, Right, Body, Icon, Text, Item, Input, ListItem, CheckBox } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './LoginScreen';
import DefultScreen from './DefultScreen';
import SignUpScreen from './SignUpScreen';

export default class RecordScreen extends Component {

    constructor() {
        super()
        this.state = {
            chechBoxOne: false,
            chechBoxTwo: false,
            type: '',
            uid: '',
            category: '',
            value: '',
            date: new Date().toLocaleString(),
            descrpiton: ''

        }

    }
    
    chechBoxOnePress = () => {
        this.setState({
            chechBoxOne: true,
            chechBoxTwo: false,
            type: 'Income'
        })
    }
    chechBoxTwoPress = () => {
        this.setState({
            chechBoxOne: false,
            chechBoxTwo: true,
            type: 'Expence'
        })
    }

    removeValue = async () => {
        this.props.navigation.navigate(LoginScreen)
        try {
            await AsyncStorage.removeItem('isLogged')

        } catch (e) {
            // remove error
        }
        console.log('Done.')

    }
    addDailyRecord() {
        fetch('http://192.168.1.113:3000/exchange/saveexchange', {
            method: 'POST',
            body: JSON.stringify({

                uid: this.state.uid,
                type: this.state.type,
                category: this.state.category,
                value: this.state.value,
                date: this.state.date,
                descrpiton: this.state.descrpiton

            }),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    render() {
        return (

            <View>
                <KeyboardAvoidingView behavior='position' style={styles.root} enabled={true}>
                    <Header style={styles.Header}>
                        <StatusBar backgroundColor="#16DB65" />
                        <Body>
                            <Title style={styles.Title}>Record Screen</Title>
                        </Body>
                    </Header>
                    <Text style={styles.TopTitle}> Daily Record </Text>

                    <Item rounded style={styles.InputFeilds}>
                        <Input placeholder='Amount'
                            style={styles.New}
                            value={this.state.value}
                            type="text"
                            name="value"
                            onChangeText={(value) => {
                                this.setState({
                                    value: value
                                })
                            }}
                        />
                    </Item>

                    <Item rounded style={styles.InputFeilds}>
                        <Input placeholder='Description'
                            style={styles.New}
                            value={this.state.descrpiton}
                            type="text"
                            name="descrpiton"
                            onChangeText={(value) => {
                                this.setState({
                                    descrpiton: value
                                })
                            }}

                        />
                    </Item>

                    <Item rounded style={styles.InputFeilds}>
                        <Input placeholder='Category'
                            style={styles.New}
                            value={this.state.category}
                            type="text"
                            name="category"
                            onChangeText={(value) => {
                                this.setState({
                                    category: value
                                })
                            }}
                        />
                    </Item>

                    <ListItem style={styles.ListItem}>
                        <CheckBox checked={this.state.chechBoxOne}
                            onPress={this.chechBoxOnePress}
                            style={styles.CheckBox}

                        />
                        <Body>
                            <Text>Income</Text>
                        </Body>

                        <CheckBox checked={this.state.chechBoxTwo}
                            onPress={this.chechBoxTwoPress}
                            style={styles.CheckBox} />
                        <Body>
                            <Text>Expence</Text>
                        </Body>
                    </ListItem>

                    <Button style={styles.Button}
                        onPress={() => {
                            this.addDailyRecord();
                        }}
                    >
                        <Text>Add</Text>
                    </Button>
                </KeyboardAvoidingView>
            </View>

        )
    }
}


const styles = StyleSheet.create({

    Title: {
        fontSize: 20,
        left: 10,
        textAlign: 'center',
        color: '#fff',
    },
    Header: {
        backgroundColor: '#16DB65',
    },
    Pagetitle: {
        marginTop: 70,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,

    },
    InputFeilds: {
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        height: 43,
        backgroundColor: '#EDEDED'
    },
    New: {
        paddingLeft: 20
    },
    Button: {
        backgroundColor: '#16DB65',
        borderRadius: 50,
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,

    },
    ButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    ListItem: {
        padding: 45,
        borderColor: '#EDEDED'

    },
    CheckBox: {
        borderColor: '#16DB65',
        borderRadius: 100,

    },
    TopTitle: {
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 120,
    },
    root: {
        paddingBottom: 100
    }
})