const processContact = (contact) => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
})
export const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=50&nat=us')
  const {results} = await response.json()
  // or const results = wait response.json().results
  return results.map(processContact)
}

export const loginfn = async (username, password) => {
  const response1 = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username: username, password: password}),
  })

  if (response1.ok){
    // this.props.navigation.navigate("Main");
    return true
  }

  const errMessage = await response1.text()
  throw new Error(errMessage)
} 