import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, KeyboardAvoidingView, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Button, Content, Footer, FooterTab, Icon, Item, Input } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class AccountScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nic: '',
            name: '',
            email: '',
            password: ''
        }


    }
    updateCustomer(nic) {
        console.log(this.state.nic);

        fetch('http://192.168.1.104:3000/user/' + nic, {

            method: 'PUT',
            body: JSON.stringify({
                nic: nic,
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
            .then((json) => console.log(json),
                this.clear,
                alert("Successfuly Updated!")

            );
    }
    clear = () => {
        this.setState({
            nic: "",
            name: "",
            email: "",
            password: ""
        });
    }


    removeValue = async () => {
        try {
            await AsyncStorage.removeItem('isLogged')
            alert("Succecfuly Logout!");
            this.props.navigation.navigate('LoginScreen')
        } catch (e) {
            console.log(e)
        }

        console.log('Done.')
    }

    render() {
        const { nic } = this.props.route.params
        return (
            <Container>
                <View>
                    <KeyboardAvoidingView behavior='position' style={styles.root} enabled={true}>
                        <Header style={styles.Header}>
                            <StatusBar backgroundColor="#16DB65" />
                            <Body>
                                <Title style={styles.Title}>My Account</Title>
                            </Body>
                        </Header>
                        <Image
                            source={require('../assests/undraw_male_avatar_323b.png')}
                            style={styles.ImageReport}
                        />
                        <Text style={styles.Title}>Edit Account</Text>


                        {/* <Text style={styles.text} value={this.setState.nic} name = "nic"> {nic}</Text> */}
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
                            onPress={() => {
                                this.updateCustomer(nic)

                            }}

                            type="submit"

                        >
                            <Text style={styles.ButtonText} > Update Account </Text>
                        </Button>

                        <Button style={styles.ButtonC}
                            onPress={this.removeValue}
                            type="submit"

                        >
                            <Text style={styles.ButtonTextC} > Log Out </Text>
                        </Button>



                    </KeyboardAvoidingView>
                </View>
                <Content>

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
    Button: {
        backgroundColor: '#16DB65',
        borderRadius: 50,
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,

    }, root: {
        paddingBottom: 40
    },
    Title: {
        fontSize: 20,
        textAlign: 'center',
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
        fontWeight: 'bold',
        paddingLeft: 25,
        paddingRight: 25,
    },

    ButtonC: {
        backgroundColor: '#f1f2f6',
        borderRadius: 50,
        paddingLeft: 90,
        paddingRight: 90,
        marginTop: 8,
        marginLeft: 50,
        marginRight: 50,

    },
    ButtonTextC: {
        color: '#747d8c',
        fontWeight: 'bold',
        paddingLeft: 12,
        paddingRight: 12,
    },
    text: {

    },
    ImageReport: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginTop: 10,
        marginLeft: 130

    }


})