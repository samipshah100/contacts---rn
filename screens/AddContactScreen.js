import { View, Text, Button } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import AddContactForm from '../AddContactForm.js'

export default class AddContactScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Add Contacts',
  }
  handlesubmit = formState => {
    this.props.screenProps.addContact(formState)
    this.props.navigation.navigate('ContactList')
  }

  render() {
    // return <Text>Addc</Text>
    return <AddContactForm onSubmit={this.handlesubmit} />
  }
}
