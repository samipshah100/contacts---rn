// const {combineReducers} = require('redux')
import { combineReducers } from 'redux'
import { UPDATE_CONTACT, UPDATE_USER } from './actions'

const merge = (prev, next) => (Object.assign({}, prev, next))

// state below is limited to contacts
const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) {
    return [...state, action.payload]
  }
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload)
    case UPDATE_CONTACT:
      return merge(state, { prevContact: action.payload })
    default:
      return state
  }
}

// combine reducer defines which objects each reducer maintains the state of. 
// So state passed to userReducer is only users and contactReducer is only state.contacts. 
export default combineReducers({
  user: userReducer,
  contacts: contactReducer,
})