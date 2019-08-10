import React from 'react';
import { Button, SectionList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import AddContactForm from './AddContactForm'
import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import SettingsScreen from './screens/SettingsScreen'
import { Ionicons } from '@expo/vector-icons';


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


const ContactsTab = createStackNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
  ContactDetails: ContactDetailsScreen,
},
{
  initialRouteName: "ContactList",
  navigationOptions: {
    headerTintColor: "#a41034",
  },
},
)

ContactsTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`${focused ? "ios-contacts" : "ios-contact"}`}
      size={25}
      color={tintColor}
    />
  )
}

const MainNavigator = createBottomTabNavigator(
  {
    Contacts: ContactsTab,
    Settings: SettingsScreen,
  },
  {
  tabBarOptions: {
    activeTintColor: "#a41034",
  },

  },
)
const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: "#a41034",
    },
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
