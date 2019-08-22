import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import {Provider} from 'react-redux'
import { Ionicons } from '@expo/vector-icons';

import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import SettingsScreen from './screens/SettingsScreen'
import contacts, { compareNames } from './contacts'
import {fetchUsers} from './Api'
import store from './redux/store'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  // componentDidMount()
  // {
  //    this.getUsers()
  // }
  
  // getUsers = async () =>  {
  //   const results = await fetchUsers()
  //   this.setState({contacts: results})
  // }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  render() {
    return (
      // store is passed to any of the connect functions we have in the app
      <Provider store={store}>
        <AppContainer />
      </Provider>
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
