import { View, Text, Button } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import AddContactForm from '../AddContactForm.js'
import store from '../redux/store'
import {addContact}from '../redux/actions'
import {connect} from 'react-redux'

class AddContactScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Add Contacts',
  }
  handlesubmit = formState => {
    // this.props.screenProps.addContact(formState)
    this.props.addContact({name:formState.name, phone: formState.phone})
    this.props.navigation.navigate('ContactList')
  }

  render() {
    // return <Text>Addc</Text>
    return <AddContactForm onSubmit={this.handlesubmit} />
  }
}

// connect function also binds action creators to dispatch. this lets it update the application state using the ACTION creators it passes as props.

// connect listens to application state (from the store). it also  updates when the state updates. and passes down the props defined according to mapStateToProps

export default connect(null, {addContact: addContact})(AddContactScreen)