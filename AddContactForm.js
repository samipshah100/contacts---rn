import React from 'react'
import {Button, StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import Constants from 'expo-constants';

const styles = StyleSheet.create (
  {
    container: {
      backgroundColor: '#fff',
      // paddingTop: Constants.statusBarHeight,
      // justifyContent: 'center',
      // flex:1,
    },

    input: {
      padding: 5,
      // border: 'black',
      borderWidth: 1,
    },
    form: {
      // paddingTop: Constants.statusBarHeight,
    },
  }
)
export default class AddContactForm extends React.Component {

  static propTypes = {
    addContact: PropTypes.func,
  }

  state = {
    name: '',
    phone: '',
    btnDisabled: true,
  }

  componentDidUpdate (prevProps, prevState)  {
    if (this.state.name !== prevState.name || this.state.phone!== prevState.phone ) {
      this.validateForm()
    }
  }


  handleNameChange = name => {
      this.setState(
        {name}, 
      )
  }
  handlePhoneChange = phone => {
    if (+phone>=0)  {
    this.setState(
      {phone}, 
    )}
  }

  validateForm = () =>  {
    console.log(this.state)

    if (+this.state.phone>=0 && this.state.phone.length<=10 &&this.state.name.length >=3 )  {
      this.setState(
        {
          btnDisabled: false,
        }
      )
    }
    else this.setState({btnDisabled: true, })
  }

  handleSubmit = () => {
      this.props.onSubmit(
        this.state)
        // this.state is same as " {... this.state} " which is all elements of state.  same as name:this.state.name, phone:this.state.phone
  }


  render()  {
    return  (
      <KeyboardAvoidingView style = {styles.container} behavior = "padding">
        <TextInput  style = {styles.input} value = {this.state.name} onChangeText = {this.handleNameChange}
        placeholder = "Name"
        />
        <TextInput style = {styles.input} value = {this.state.phone} onChangeText = {this.handlePhoneChange} keyboardType = "numeric"
        placeholder = "Phone"
        />

        <Button title="Submit" onPress = {this.handleSubmit} disabled = {(this.state.btnDisabled)} />
      </KeyboardAvoidingView>
    )
  }
}