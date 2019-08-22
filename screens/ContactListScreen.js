import { View, Text, Button, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import Constants from 'expo-constants'
import ContactsList from '../ContactsList';
import { compareNames } from '../contacts'
// import store from '../redux/store'
import {connect} from 'react-redux'

class ContactListScreen extends React.Component {

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
        <Button title="Toogle Contacts" onPress = {this.toggleContacts} />
        {this.state.showContacts &&
          <ContactsList
            // contacts={this.props.screenProps.contacts}
            contacts = {this.props.contacts}
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

const mapStateToProps = state => ({
  contacts: state.contacts,
})

// connect is a higher order component. it listens to application state (from the store). it updates when the state updates. and passes down the props defined according to mapStateToProps
export default connect(mapStateToProps)(ContactListScreen)