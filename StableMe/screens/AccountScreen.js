import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar } from 'react-native'
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class AccountScreen extends Component {
    render() {
        return (
            <Header style={styles.Header}>
                    <StatusBar backgroundColor="#16DB65" />
                    <Body>
                        <Title style={styles.Title}>My Account</Title>
                    </Body>
                </Header>
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