import React, { Component, useState } from 'react';
import { View, StyleSheet, StatusBar, KeyboardAvoidingView, Pressable } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input } from 'native-base';
import LoginScreen from './LoginScreen';

class SignUpScreen extends Component {
    constructor() {
        super()
        this.state = {
            nic: '',
            name: '',
            email: '',
            password: ''
        }
    }

    saveCustomer = () => {
        fetch('http://192.168.1.113:3000/user/saveuser', {
            method: 'POST',
            body: JSON.stringify({
                nic: this.state.nic,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));


    }
    getData() {
        fetch('http://192.168.1.113:3000/user', { method: 'GET' })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }

    loginPage=()=>{
        this.props.navigation.navigate(LoginScreen)
    }

    render() {
        return (
            <View>
                <KeyboardAvoidingView behavior='position' style={styles.root} enabled={true}>
                    <Header style={styles.Header}>
                        <StatusBar backgroundColor="#16DB65" />
                        <Body>
                            <Title style={styles.Title}>StableMe</Title>
                        </Body>
                    </Header>
                    <Text style={styles.Pagetitle}>
                        Sign Up
                    </Text>
                    <Item rounded style={styles.InputFeilds}>
                        <Input
                            placeholder='National ID'
                            style={styles.New}
                            value={this.state.nic}
                            type="text"
                            name="nic"
                            onChangeText={(value) => {
                                this.setState({
                                    nic: value
                                })
                            }}
                        />
                    </Item>
                    <Item rounded style={styles.InputFeilds}>
                        <Input
                            placeholder='Your Name'
                            style={styles.New}
                            value={this.state.name}
                            type="text"
                            name="name"
                            onChangeText={(value) => {
                                this.setState({
                                    name: value
                                })
                            }}
                        />
                    </Item>
                    <Item rounded style={styles.InputFeilds}>
                        <Input
                            placeholder='Email Address'
                            style={styles.New}
                            value={this.state.email}
                            type="text"
                            name="email"
                            onChangeText={(value) => {
                                this.setState({
                                    email: value
                                })
                            }}
                        />
                    </Item>
                    <Item rounded style={styles.InputFeilds} >
                        <Input
                            placeholder='Password'
                            style={styles.New}
                            value={this.state.password}
                            type="text"
                            name="password"
                            onChangeText={(value) => {
                                this.setState({
                                    password: value
                                })
                            }}
                        />
                    </Item>
                    <Button style={styles.Button}
                        onPress={this.saveCustomer}
                        type="submit"

                    >
                        <Text style={styles.ButtonText} > Create Account </Text>
                    </Button>

                    <Button style={styles.Button}
                        onPress={this.loginPage}

                    >
                        <Text style={styles.ButtonText} > Login </Text>
                    </Button>
                    
                </KeyboardAvoidingView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    root: {
        paddingBottom: 40
    },
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
        marginBottom: 20

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
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,

    },
    ButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },


})

export default SignUpScreen;
