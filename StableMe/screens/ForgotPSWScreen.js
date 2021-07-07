import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';

export default class ForgotPSWScreen extends Component {
  constructor() {
    super()
    this.state = {
      chechBoxOne: false,
      chechBoxTwo: false,
      chechBoxThree: false,
    }
  }
  chechBoxOnePress=()=> {
    this.setState({
      chechBoxOne:true,
      chechBoxTwo: false,
      chechBoxThree: false,
    })
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={this.state.chechBoxOne}
              onPress={this.chechBoxOnePress} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.state.chechBoxTwo} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.state.chechBoxThree} color="green" />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    )
  }
}


