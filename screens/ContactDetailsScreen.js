import { View, Text, Button, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import Constants from 'expo-constants'
import ContactsList from '../ContactsList';
import { compareNames } from '../contacts'

export default class ContactDetailsSreen extends React.Component  {
  static navigationOptions  = ({navigation}) => ({
    // use {} navigation to get nvigation prop
    headerTitle: navigation.getParam('name'),
  })
  render()  {
    return (
      <View>
        <Text>
          {
            this.props.navigation.getParam ('phone')
            // Get params from navigation props set in ContactDetailsSreen
          }
        </Text>
        <Button title = 'Go to random contact' onPress = {this.goToRandomContact}
        />
      </View>
    )
  }

  goToRandomContact = () => {
    const { contacts } = this.props.screenProps;
    const phone = this.props.navigation.getParam('phone');
    let randomContact;
    while (!randomContact) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      if (contacts[randomIndex].phone !== phone) {
        randomContact = contacts[randomIndex];
      }
    }

    // this.props.navigation.navigate('ContactDetails',{
    //   name: randomContact.name,
    //   phone: randomContact.phone,
    // })
    // THE PROBLEM with above is that it adds the params to the same screen. instead we want to push a new screen as per below. 
    
    this.props.navigation.push('ContactDetails',{
      name: randomContact.name,
      phone: randomContact.phone,
    })

  };


}