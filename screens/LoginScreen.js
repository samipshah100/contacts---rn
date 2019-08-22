import React from "react";
import { Button, View, TextInput, StyleSheet, Text } from "react-native";
import {loginfn} from '../Api'


export default class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleUsernameUpdate = username => {
    this.setState({username: username})
  }

  handlePasswordUpdate = password => {
    this.setState({password: password})
  }
  _login = () => {
    this.props.navigation.navigate('ContactList')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.errText}>{this.state.err}</Text>
        
        <Button title="Press to Log In" onPress={this._login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  },
  errText: {
    textAlign: "center",
    color: 'red',
  },
});
