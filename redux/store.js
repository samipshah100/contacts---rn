// const {createStore} = require('redux')
// const {reducer} = require('./reducer')
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'
import {addContact} from './actions'

// REAL THUNK IMPLEMENTATION
// const thunk = store => next => action => {
//   if (typeof(action) === 'function')  {
//     action (store.dispatch)
//   }
//   else  {  
//     next(action)
//   }
// }

const store = createStore(reducer, applyMiddleware(thunk))

// store.dispatch(updateUser({ foo: 'foo' }))
// store.dispatch(updateUser({ bar: 'bar' }))
// store.dispatch(updateUser({ foo: 'baz' }))

store.dispatch(addContact({ name: "Samip", phone: '1234567890', }))
store.dispatch(addContact({ name: "Samip", phone: '1234567890', }))
store.dispatch(addContact({ name: "David", phone: '9874567890', }))

console.log(store.getState())

export default store
