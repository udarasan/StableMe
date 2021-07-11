import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, KeyboardAvoidingView,Image } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, ActionSheet, DatePicker, Button, Left, Right, Body, Icon, Text, Item, Input, ListItem, CheckBox } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './LoginScreen';
import DefultScreen from './DefultScreen';
import SignUpScreen from './SignUpScreen';

export default class RecordScreen extends Component {

    constructor() {
        super()
        this.state = {
            chechBoxOne: false,
            chechBoxTwo: false,
            type: '',
            uid: '',
            category: '',
            value: '',
            date:null,
            descrpiton: ''

        }

    }
    componentDidMount() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var todayo = mm + '/' + dd + '/' + yyyy;
        this.setState({
            date:todayo
        })
        console.log(todayo);
    }
    chechBoxOnePress = () => {
        this.setState({
            chechBoxOne: true,
            chechBoxTwo: false,
            type: 'Income'
        })
    }
    chechBoxTwoPress = () => {
        this.setState({
            chechBoxOne: false,
            chechBoxTwo: true,
            type: 'Expence'
        })
    }

    removeValue = async () => {
        this.props.navigation.navigate(LoginScreen)
        try {
            await AsyncStorage.removeItem('isLogged')

        } catch (e) {
            // remove error
        }
        console.log('Done.')

    }
    addDailyRecord(nic) {
        fetch('http://192.168.1.104:3000/exchange/saveexchange', {
            method: 'POST',
            body: JSON.stringify({

                uid: nic,
                type: this.state.type,
                category: this.state.category,
                value: this.state.value,
                date: this.state.date,
                descrpiton: this.state.descrpiton

            }),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
            alert("Record Added Successfuly"),
            this.clear()
            

    }
    passNICToAnotherScreen(pass) {
        console.log(pass+" - pass data");
        
    }
    clear () {
        this.setState({
            category: '',
            value: '',
            descrpiton: '',
            chechBoxOne: false,
            chechBoxTwo: false,
        });
    }
    render() {
        const { nic } = this.props.route.params
        return (
            <Container>
                <KeyboardAvoidingView behavior='position' style={styles.root} enabled={true}>
                    <Header style={styles.Header}>
                        <StatusBar backgroundColor="#16DB65" />
                        <Body>
                            <Title style={styles.Title}>Record Screen</Title>
                        </Body>
                    </Header>
                    <Image
                    source={require('../assests/undraw_Add_files_re_v09g.png')}
                    style={styles.ImageReport}
                />
                   
                    <Text style={styles.TopTitle}> Daily Record </Text>

                    <Item rounded style={styles.InputFeilds}>
                        <Input placeholder='Amount'
                            style={styles.New}
                            value={this.state.value}
                            type="text"
                            name="value"
                            onChangeText={(value) => {
                                this.setState({
                                    value: value
                                })
                            }}
                        />
                    </Item>

                    <Item rounded style={styles.InputFeilds}>
                        <Input placeholder='Description'
                            style={styles.New}
                            value={this.state.descrpiton}
                            type="text"
                            name="descrpiton"
                            onChangeText={(value) => {
                                this.setState({
                                    descrpiton: value
                                })
                            }}

                        />
                    </Item>

                    <Item rounded style={styles.InputFeilds}>
                        <Input placeholder='Category'
                            style={styles.New}
                            value={this.state.category}
                            type="text"
                            name="category"
                            onChangeText={(value) => {
                                this.setState({
                                    category: value
                                })
                            }}
                        />
                    </Item>

                    <ListItem style={styles.ListItem}>
                        <CheckBox checked={this.state.chechBoxOne}
                            onPress={this.chechBoxOnePress}
                            style={styles.CheckBox}
                            

                        />
                        <Body>
                            <Text>Income</Text>
                        </Body>

                        <CheckBox checked={this.state.chechBoxTwo}
                            onPress={this.chechBoxTwoPress}
                            style={styles.CheckBox} />
                        <Body>
                            <Text>Expence</Text>
                        </Body>
                    </ListItem>

                    <Button style={styles.Button}
                        onPress={() => {
                            this.passNICToAnotherScreen(nic)
                            this.addDailyRecord(nic);
                        }}
                    >
                        <Text>Add</Text>
                    </Button>
                </KeyboardAvoidingView>

                <Content>
                
                </Content>
                <Footer>
                    <FooterTab style={styles.Footer}>
                        <Button  vertical  onPress={()=>this.props.navigation.navigate('ReportScreen')}>
                            <Icon name="apps" style={styles.Icon} />
                            <Text style={styles.Icon}>Report</Text>
                        </Button>
                        <Button vertical onPress={()=>this.props.navigation.navigate('ExpensesScren',{nic:nic})}>
                            <Icon name="expand" style={styles.Icon} />
                            <Text style={styles.Icon}>Exchange</Text>
                        </Button>
                        <Button vertical  onPress={()=>this.props.navigation.navigate('RecordScreen',{nic:nic})}>
                            <Icon  name="navigate"  style={styles.Icon}/>
                            <Text style={styles.Icon}>rECORD</Text>
                        </Button>
                        <Button vertical onPress={()=>this.props.navigation.navigate('AccountScreen',{nic:nic})}>
                            <Icon name="person"style={styles.Icon} />
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
        marginBottom: 20,

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
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,

    },
    ButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    ListItem: {
        padding: 45,
        borderColor: '#EDEDED'

    },
    CheckBox: {
        borderColor: '#16DB65',
        borderRadius: 100,

    },
    TopTitle: {
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 120,
    },
    root: {
        paddingBottom: 95
    },
    Footer: {
        
        backgroundColor: '#16DB65',
    },
    Icon: {
        
        color: '#fff',
    },
    ImageReport:{
        marginTop:10,
        width:100,
        height:100,
        marginLeft:110,
    }
})