import React, { Component } from 'react'
import {  View,StyleSheet,StatusBar } from 'react-native'
import { Container, Header, Content, List, ListItem, Title,Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class ExpensesScren extends Component {
    render() {
        return (
            <Container>
            <Header style={styles.Header}>
                <StatusBar backgroundColor="#16DB65" />
                    <Body>
                        <Title style={styles.Title}>Exchanges List</Title>
                    </Body>
            </Header>

            <Content>
            <List>
              <ListItem avatar>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>category</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>2020/01/12</Text>
                </Right>
              </ListItem>
            </List>
          </Content>
          </Container>

          

                 
                
     
     
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