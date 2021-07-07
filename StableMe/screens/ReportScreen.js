import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar } from 'react-native'
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default class ReportScreen extends Component {
    
    
    render() {
        const {nic}=this.props.route.params
        return (
            <View>
            <Header style={styles.Header}>
                    <StatusBar backgroundColor="#16DB65" />
                    <Body>
                        <Title style={styles.Title}>Report Screen</Title>
                    </Body>
                </Header>
                <Text style={styles.Pagetitle}>
                {nic}
            </Text>
            </View>
        )}
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