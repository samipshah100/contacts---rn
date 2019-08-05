import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import contacts, {compareNames} from './contacts'

import Row from './Row'

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts].sort(compareNames),
      })
    )
  }

  renderItem = (obj) => (
    // spread operator ...obj.item means that all the key values of item (i.e one object inside array). viz. 'name' and 'phone')
    
    // item is a way for renderItem method (of FlatList) to access one element of the array passed to data. Here item is: {name: String, phone: String, key: Number}

    // Flat list uses renderItem() to  display all the elements of data ('obj' here) (i.e contacts) one by one on its own. we do NOT need to use map fn. 

    <Row {...obj.item} />
    // above is same as <Row name = {obj.item.name} phone = {obj.item.phone}/>
  )

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        {this.state.showContacts && ( 
          <FlatList
          data = {this.state.contacts}
          renderItem = {this.renderItem}
          />
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
