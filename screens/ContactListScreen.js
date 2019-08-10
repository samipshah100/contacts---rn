import { View, Text, Button, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import Constants from 'expo-constants'
import ContactsList from '../ContactsList';
import { compareNames } from '../contacts'

export default class ContactListScreen extends React.Component {

  static navigationOptions = (exampleThings) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button title="Add" color="#a41034" onPress={
        () => {
          exampleThings.navigation.navigate('AddContact')
        }
      }
      // (exampleThings) can be destructured as ( {navigation}) in the arrow fn params and then called directly as navigation.navigate [no need for exampleThings.navigation.navigate() -> instead we use: navigation.navigate() ] 
      />
    ),
  })

  state = {
    showContacts: true,
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }
  showForm = () => {
    this.props.navigation.navigate('AddContact')
  }

  sort = () => {
    this.setState(
      prevState => ({
        contacts: [prevState.contacts].sort(compareNames),
      })
    )
  }

  render() {
    // return <Text>Hello</Text>
    return (
      <View style={styles.container}>
        {this.state.showContacts &&
          <ContactsList
            contacts={this.props.screenProps.contacts}
            onSelectContact={
              (contact) => {
                this.props.navigation.navigate('ContactDetails', {
                  phone: contact.phone,
                  name: contact.name,
                }
                  // pass the params to navigation props. This will be used in ContactDetailsScreen
                )
              }
            }
          />
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingTop: Constants.statusBarHeight,
  },
});