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

  dispatch(update) {
    this.state = this.reducer(this.state, update)
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

const store = new Store(reducer, DEFAULT_STATE)

store.dispatch(updateUser({ foo: 'foo' }))
store.dispatch(updateUser({ bar: 'bar' }))
store.dispatch(updateUser({ foo: 'baz' }))

store.dispatch(addContact({ name: "Samip", phone: '1234567890', }))
store.dispatch(addContact({ name: "Samip", phone: '1234567890', }))

console.log(store.getState())