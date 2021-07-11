import React, { Component ,useState} from 'react'
import { View, StyleSheet, StatusBar, Image, RefreshControl, ScrollView } from 'react-native'
import { Card, CardItem, Container, Header, Content, Footer, FooterTab, Button, Body, Title, Icon, Text } from 'native-base';



export default class ReportScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nic: '',
            name: '',

        }
this.doRefresh()
        

        
    }

doRefresh=()=>{
    const { nic } = this.props.route.params
    this.getExpense(nic)
    this.getIncome(nic)
}

    getIncome(nic) {
        fetch('http://192.168.1.104:3000/exchange/incexpenses/' + nic, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => this.setState({
                displayname1: (json[0].total)
            }))

    }
    getExpense(nic) {
        fetch('http://192.168.1.104:3000/exchange/exexpenses/' + nic, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => this.setState({
                displayname2: (json[0].total)
            }))

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
                            <Image
                                source={require('../assests/erer.png')}
                                style={styles.ImageReport}
                            />
                        </Body>

                    </CardItem>
                    <Body style={styles.Body1}>
                        <Text>Income </Text>
                        <Text style={styles.TextSize}>Rs :{this.state.displayname2} </Text>
                    </Body>

                    <Body style={styles.Body2}>
                        <Text>Expense </Text>
                        <Text style={styles.TextSize}>Rs :{this.state.displayname1} </Text>
                    </Body>
                    <Button style={styles.Button5} onPress={() => {
                            this.doRefresh()
                        }} >
                        <Text>Refresh</Text>
                    </Button>
                </Content>

                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical onPress={() => this.props.navigation.navigate('ReportScreen')}>
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
    Button5: {
        backgroundColor: '#16DB65',
        borderRadius:10,
        left:130,

    },
    Welcome: {
        fontSize: 25
    },
    ImageReport: {
        marginTop: 0,
        width: 150,
        height: 150,
        marginLeft: 70,
    },
    Body1: {
        backgroundColor: '#f5f5f5',
        marginLeft: 13,
        marginRight: 13,
        marginBottom: 8,
        padding: 13,
        paddingLeft: 90,
        paddingRight: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#05c46b'

    },
    Body2: {
        backgroundColor: '#f5f5f5',
        marginLeft: 13,
        marginRight: 13,
        marginBottom: 8,
        padding: 13,
        paddingLeft: 90,
        paddingRight: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#05c46b'

    },
    TextSize: {
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        
    }

})