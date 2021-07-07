import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Button } from 'native-base';

export default class AccountScreen extends Component {
    constructor() {
        super()
        this.state = {
            nic: ''
        }
        this.getData()

    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('isLogged')
            if (value !== null) {
                console.log('0' + value)
                this.setState({ nic: value })
                this.getUser
            }
        } catch (e) {
            // error reading value
        }
    }
    getUser = () => {
        fetch('http://192.168.1.113:3000/user/oneuser/' + this.state.nic, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => console.log(json))

    }

    render() {
        return (
            <View>
                <Header style={styles.Header}>
                    <StatusBar backgroundColor="#16DB65" />
                    <Body>
                        <Title style={styles.Title}>My Account</Title>
                    </Body>
                </Header>
                <Button
                    onPress={this.getUser}
                >
                    <Text  > Create Account </Text>
                </Button>
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
        marginBottom: 20

    }
})