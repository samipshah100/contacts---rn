import React from 'react';
import { Button, SectionList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import AddContactForm from './AddContactForm'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'

import contacts, { compareNames } from './contacts'

import Row from './Row'

let testArr = [{ name: "samip", phone: "123" }]

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
    showForm: false,
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  render() {
    return (
      <AppContainer
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    )
  }
}

const AppNavigator = createStackNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
  ContactDetails: ContactDetailsScreen,
},
  {
    initialRouteName: "ContactList",
  }
)

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Constants.statusBarHeight,
  },
});
