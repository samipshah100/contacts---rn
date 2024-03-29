import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create(
  {
    row:  {
      padding:10,
    },
  }
)
const Row = props => (
  <TouchableOpacity style = {styles.row}
    onPress = {() => {
      props.onSelectContact(props)
    }}
  >
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
)

export default Row