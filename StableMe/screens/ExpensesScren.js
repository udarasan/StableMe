import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, FlatList, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, CardItem, Text, Left, Body, Right, Button, Title, Footer, FooterTab, Icon } from 'native-base';


export default class ExpensesScren extends Component {
  constructor(props) {
    super(props);
    this.scrollToTopAndRefresh = this.scrollToTopAndRefresh.bind(this);
    this.doRefresh = this.doRefresh.bind(this);
    this.state = {
      isLoading: true,
      refreshing: false,
    }
    const { nic } = this.props.route.params
    this.getData(nic)

  }

  scrollToTopAndRefresh() {
    this.flatlistref.scrollToOffset({ y: 0, animated: true });
    this.setState({ refreshing: true }, this.doRefresh);
  }

  doRefresh() {
    console.log('dsds')
    this.getData
    setTimeout(() => this.setState({ refreshing: false }), 10);
  }

  getData(nic) {

    return fetch('http://192.168.1.104:3000/exchange/oneexchange/' + nic)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,

        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  flatlistref = null;
  render() {
    const { nic } = this.props.route.params
    return (
      <Container>
        <Header style={styles.Header}>
          <StatusBar backgroundColor="#16DB65" />
          <Body>
            <Title style={styles.Title}>Exchanges List</Title>
          </Body>
        </Header>


        <View style={{ flex: 1 }}>

          <FlatList
            ref={(ref) => this.flatlistref = ref}
            style={styles.Fatlist}
            data={this.state.dataSource}
            renderItem={({ item }) =>
              <View style={styles.Card}>

                <Text style={styles.Date}>{item.date}</Text>
                <Text style={styles.Value}>{item.value}</Text>
                <Text style={styles.Type}>Expense Or InCome : {item.type}</Text>
                <Text style={styles.Category}>Transaction Category : {item.category}</Text>
              </View>

            }
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.doRefresh}
              />
            }
            keyExtractor={(item, index) => index.toString()}
          />
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
          
        </View>
        
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
  Fatlist: {
    marginTop: 13,

  },

  Card: {
    backgroundColor: '#f5f5f5',
    marginLeft: 13,
    marginRight: 13,
    marginBottom: 8,
    padding: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#05c46b'

  },

  Date: {

    flexDirection: 'row',
    left: 215,
    color: '#2f3542',

  },
  Value: {
    fontSize: 35,
    color: '#05c46b'

  },
  Type: {
    flexDirection: 'row',
    color: '#2f3542'


  },
  Category: {
    flexDirection: 'column',
    color: '#2f3542'


  },
  Descrpiton: {
    flexDirection: 'column',
    color: '#2f3542'

  },
  Footer: {

    backgroundColor: '#16DB65',
  },
  Icon: {

    color: '#fff',
  }
})