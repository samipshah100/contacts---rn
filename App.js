import React from 'react';
import { Button, SectionList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'

import contacts, {compareNames} from './contacts'

import Row from './Row'

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

  render() {
    if (this.state.showForm) return <AddContactForm />
    
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
