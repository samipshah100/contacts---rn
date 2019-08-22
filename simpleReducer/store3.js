const fetch = require('isomorphic-fetch')

const login = async (username, password) => {
  const response1 = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username: username, password: password}),
  })
  .then( 
    response => {
      if (response.ok){
        // this.props.navigation.navigate("Main");
        return true
      }
    }
  )
  .catch ( response => {
    const errMessage = response.text()
    throw new Error(errMessage)
  }
  )
} 

//action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer
    this.state = initialState
  }

  getState() {
    return this.state
  }

  dispatch(action) {
    if (typeof action === 'function') {
      action(this.dispatch.bind(this))
    }
    else  {
      console.log('received an action', action.type)
      this.state = this.reducer(this.state, action)
    }
  }
}

const DEFAULT_STATE = { user: {}, contacts: [] }

const merge = (prev, next) => (Object.assign({}, prev, next))

// state below is limited to contacts
const contactReducer = (state, action) => {
  if (action.type === 'UPDATE_CONTACT') {
    return [...state, action.payload]
  }
  return state
}

const userReducer = (state, action) => {
  if (action.type === 'UPDATE_USER') {
    return merge(state, action.payload)
  }
  return state
}

const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contact, action)
})

//action creators
const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

const addContact = update => ({
  type: UPDATE_CONTACT,
  payload: update,
})

// async action creator
const logInUser = (username, password) => dispatch => {
  dispatch({type: 'LOG_IN_SENT'})
  fetch(login(username, password))
  .then(() => {
    dispatch ({type: 'LOG_IN_SUCCESS'}) 
  })
  .catch( err=> { 
    dispatch ({type: 'LOG_IN_REJECTION'})
  })
}

const store = new Store(reducer, DEFAULT_STATE)

store.dispatch(logInUser('username', 'password'))

// store.dispatch(updateUser({ foo: 'foo' }))
// store.dispatch(updateUser({ bar: 'bar' }))
// store.dispatch(updateUser({ foo: 'baz' }))

// store.dispatch(addContact({ name: "Samip", phone: '1234567890', }))
// store.dispatch(addContact({ name: "Samip", phone: '1234567890', }))

console.log(store.getState())