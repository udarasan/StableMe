import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text, Body } from 'native-base';
export default class ForgotPSWScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nic:'',
          name: '',
          email:'',
          password:''
        };
      }
    
    //   getDate() {
    //     return fetch('http://192.168.1.187:3000/user/oneuser/C001', {
    //         method: 'GET',
    //     }).then((response) => response.json()).then((user) => {
    //         console.log(user)
    //     })
    // }
    
    saveCustomer = () => {
    
      fetch('http://192.168.1.113:3000/user/saveuser', {
      method: 'POST',
      body: JSON.stringify({
        nic: this.state.nic ,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
         Accept : 'application/json',
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      // var data = new Body();
      // data.append('Accept', 'application/json')
      // data.append('uid', this.state.uid)
      // data.append('name', this.state.name)
      // data.append('email', this.state.email)
      // data.append('password', this.state.password)
    
      // return fetch('http://192.168.1.187:3000/user', {
      //     method: 'POST',
      //     body: data
      // }).then((response) => response.json()).then((resp) => {
      //     if (resp.affectedRows > 0) {
      //         Alert.alert('User Added')
      //     }
      // }).catch((errr) => {
      //     console.log("Failed")
      // })
    }
    
    
    
    getData(){
      fetch('http://192.168.1.113:3000/user',{ method: 'GET'})
    .then((response) => response.json())
    .then((json) => console.log(json))
    }
    
    
    submitHandler = (e) =>{
      e.preventDefault()
      console.log(this.state);
    }
    
    render() {
        return (
            <Container>
                    <Header />
                    <Content>
                      <Form onSubmit = {this.submitHandler}>
                        <Item>
                          <Input placeholder="Useid" 
                          value={this.state.nic}
                          type = "text"
                          name = "nic"
                          // onChange = {this.changeHandler}
                          onChangeText={(value) => {
                              this.setState({
                                nic: value
                              })
                          }}
                          />
                        </Item>
                        <Item>
                          <Input placeholder="Username" 
                          value={this.state.name}
                          type = "text"
                          name = "name"
                          // onChange = {this.changeHandler}
                          onChangeText={(value) => {
                              this.setState({
                                name: value
                              })
                          }}
                          />
                        </Item>
                        <Item>
                          <Input placeholder="email" 
                          value={this.state.email}
                          type = "text"
                          name = "email"
                          // onChange = {this.changeHandler}
                          onChangeText={(value) => {
                              this.setState({
                                email: value
                              })
                          }}
                          />
                        </Item>
                        <Item last>
                          <Input placeholder="Password" 
                          value={this.state.password}
                          type = "text"
                          name = "password"
                          // onChange = {this.changeHandler}
                          onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}
                          />
                        </Item>
                        <Button
                        onPress={this.saveCustomer}
                        type = "submit"
                        >
                          <Text>SignUp</Text>
                       </Button>
                      </Form>
                    </Content>
                  </Container>
        )
    }
}
