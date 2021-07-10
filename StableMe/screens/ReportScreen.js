import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Image } from 'react-native'
import { Card, CardItem, Container, Header, Content, Footer, FooterTab, Button, Body, Title, Icon, Text } from 'native-base';
import LoginScreen from './LoginScreen';


export default class ReportScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nic: '',
            name: '',

        }
    }
    passNICToAnotherScreen(pass) {
        console.log(pass + " - pass data");
        fetch('http://192.168.1.104:3000/user/oneuser/' + pass, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => console.log(json))

    }
    componentDidMount() {


    }
    render() {
        const { nic } = this.props.route.params

        return (
            <Container>

                <Header style={styles.Header}>
                    <StatusBar backgroundColor="#16DB65" />
                    <Body>
                        <Title style={styles.Title}>Report Screen</Title>
                    </Body>
                </Header>
                <Content>

                   
                        <CardItem style={styles.CardItem}>
                            <Body>
                                <Text>
                                    Your ID : {nic}
                                </Text>
                                <Text style={styles.Welcome}>
                                    Hello There! Welcome To Statble Me
                                </Text>
                            </Body>
                        </CardItem>
                    
                    <Image
                    source={require('../assests/erer.png')}
                    style={styles.ImageReport}
                />

                </Content>
                
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical onPress={() => this.props.navigation.navigate('ReportScreen'), this.passNICToAnotherScreen(nic)}>
                            <Icon name="apps" style={styles.Icon} />
                            <Text style={styles.Icon}>Report</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('ExpensesScren', { nic: nic })}>
                            <Icon name="expand" style={styles.Icon} />
                            <Text style={styles.Icon}>Exchange</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('RecordScreen', { nic: nic })}>
                            <Icon name="navigate" style={styles.Icon} />
                            <Text style={styles.Icon}>Record</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('AccountScreen', { nic: nic })}>
                            <Icon name="person" style={styles.Icon} />
                            <Text style={styles.Icon}>Account</Text>
                        </Button>
                    </FooterTab>
                </Footer>


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

    },
    Footer: {

        backgroundColor: '#16DB65',
    },
    Icon: {

        color: '#fff',
    },
    CardItem: {

    },
    Card: {
        

    },
    Welcome: {
        fontSize: 25
    },
    ImageReport:{
        marginTop:50,
        width:200,
        height:200,
        marginLeft:70,
    }

})