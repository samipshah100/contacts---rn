import React from 'react';
import { createAppContainer, createSwitchNavigator,Button, SectionList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'
// import AddContactScreen from './screens/AddContactScreen'
// import ContactListScreen from './screens/ContactListScreen'

import contacts, {compareNames} from './contacts'

import Row from './Row'

const AppNavigator = createSwitchNavigator( {
  RouteDisplayContactsScreen: "a" ,
  RouteAddContactScreen: "a",
},
{
  initialRouteName: a,
}
)

const AppContainer = createAppContainer(AppNavigator)

let testArr = [{name: "samip", phone:"123"}]

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
    showForm:false,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }
  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  sort = () => {
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts].sort(compareNames),
      })
    )
  }

  addContact = newContact =>  {
    this.setState(
      prevState => ({
        showForm:false,
        contacts: [ ... prevState.contacts,newContact]
      })
    )

  }

  render() {
    if (this.state.showForm) return (
      <View style = {styles.container}> 
        <AddContactForm onSubmit = {this.addContact} />
      </View>
    )
    
    return (
      <View style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Sort" onPress={this.sort} />
        <Button title="Add Contact" onPress = {this.toggleForm}/>
        {this.state.showContacts && 
          <ContactsList 
            contacts = {this.state.contacts}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
