import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

const renderItem = (obj) => (
  // spread operator ...obj.item means that all the key values of item (i.e one object inside array). viz. 'name' and 'phone')

  // item is a way for renderItem method (of List) to access one element of the array passed to data. Here item is: {name: String, phone: String, key: Number}

  // Flatlist and Section uses renderItem() to  display all the elements of data ('obj' here) (i.e contacts) one by one on its own. we do NOT need to use map fn. 

  <Row {...obj.item} />
  // above is same as <Row name = {obj.item.name} phone = {obj.item.phone}/>
)

// ANOTHER WAY to say this ^^^ : 
// renderItem = ({item}) => <Row {...item} />
// this destructures the object which is passed to renderItem() and extracts only the 'item' value. 

///////////////////////////////////////////////


// obj passed to renderSectionHeader has a .section 
const renderSectionHeader = obj => (
  <Text>{obj.section.title}</Text>
)

const ContactsList = props => {

  let final = []

  let alphArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

  //  let arr = [{name: "Samip", phone : "123"}, {name: "Satya", phone : "789"}, {name: "Chirag", phone : "456"},]

  //  let outputSample = 
  //  [
  //    {
  //      title: "S", 
  //      data: [{name: "Samip", phone : "123" }, {name: "Satya", phone : "789"}]
  //    },
  //    {
  //      title: "C", 
  //      data: [{name: "Chirag", phone : "456"},] 
  //    }
  //  ]


  const groupBy = (arr, alphArray) => {
    return (
      arr.reduce(
        (acc, obj) => {

          // now key has String "S"
          let key = obj.name.charAt(0).toUpperCase()

          // now put  this obj in section 'S'

          // thisObj will refer to the object for that section "S"
          let thisObj = final.find(
            o => { return o.title === key }
          )

          // if thisObj not found, create it

          if (thisObj === undefined) {
            final.push(
              {
                title: key,
                data: [obj],
              }
            )
          }

          //insert obj in section s of acc
          else {
            thisObj.data.push(obj)
          }

          return final
        }
        , {}
      )
    )
  }

  const sectionsArr = groupBy(arr, alphArray)

  // console.log(sectionsArr)


  return (
    <SectionList
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}


      //sections is an array with objects for EACH section
      sections={[
        //section object
        {
          title: 'A',
          data: props.contacts,
        }
      ]}

    />
  )
}

ContactsList.propsTypes = {
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  contacts: PropTypes.array,
}
export default ContactsList