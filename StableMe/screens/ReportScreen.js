import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, Icon, Text } from 'native-base';
import LoginScreen from './LoginScreen';


export default class ReportScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nic: ''
        }
    }
    passNICToAnotherScreen(pass) {
        console.log(pass+" - pass data");
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
                    <Text>{nic}</Text>
                </Content>
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical onPress={() => this.props.navigation.navigate('ReportScreen'),this.passNICToAnotherScreen(nic)}>
                            <Icon name="apps" style={styles.Icon} />
                            <Text style={styles.Icon}>Report</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('ExpensesScren', { nic: nic })}>
                            <Icon name="camera" style={styles.Icon} />
                            <Text style={styles.Icon}>Expenses</Text>
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
    }
})