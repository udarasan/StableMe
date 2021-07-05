import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, ActionSheet, DatePicker, Button, Left, Right, Body, Icon, Text, Item, Input, ListItem, CheckBox } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './LoginScreen';
import DefultScreen from './DefultScreen';

export default class RecordScreen extends Component {
    constructor(props) {
        super()
        this.state = {
            
        }
    }

    removeValue = async () => {
        try {
            await AsyncStorage.removeItem('isLogged')
            
        } catch (e) {
            // remove error
        }
        console.log('Done.')
    }
    render() {
        return (
            <View>
                <Header style={styles.Header}>
                    <StatusBar backgroundColor="#16DB65" />
                    <Body>
                        <Title style={styles.Title}>Record Screen</Title>
                    </Body>
                </Header>

                <Item rounded style={styles.InputFeilds}>
                    <Input placeholder='Amount' style={styles.New} />
                </Item>
                <Item rounded style={styles.InputFeilds}>
                    <Input placeholder='Description' style={styles.New} />
                </Item>



                <Button style={styles.Button}
                    onPress={()=>{
                        this.removeValue();
                    }}
                >

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
        paddingLeft: 90,
        paddingRight: 90,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,

    },
    ButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    }

})