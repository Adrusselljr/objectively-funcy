function getFirstName(user = {}) {
  return user.firstName
}
console.log(getFirstName({firstName: 'Colon', lastName: 'Jaffe'}))
console.log(getFirstName({firstName: 'Petra', lastName: 'Solano'}))

function getLastName(user = {}) {
  return user.lastName
}
// console.log(getLastName({firstName: 'Colon', lastName: 'Jaffe'}))
// console.log(getLastName({firstName: 'Petra', lastName: 'Solano'}))

function getFullName(user = {}) {
  return `${user.firstName} ${user.lastName}`
}
// console.log(getFullName({firstName: 'Colin', lastName: 'Jaffe'}))
// console.log(getFullName({firstName: 'Petra', lastName: 'Solano'}))

function setFirstName(user = {}, newFirst) {
  return user.firstName = newFirst
}
// console.log(setFirstName({firstName: 'Colin', lastName: 'Jaffe'}, 'Redacted'))
// console.log(setFirstName({firstName: 'Petra', lastName: 'Solano'}, 'Anthony'))

function setAge(user = {}, newAge) {
  return user.age = newAge
}
// console.log(setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45))
// console.log(setAge({firstName: 'Petra', lastName: 'Solano', age: 29}, 35))

function giveBirthday(user = {}) {
  console.log(user.age)
  if(user.age === undefined) {
    user.age = 1
  }
  else {
    user.age += 1
  }
  return user
}
// console.log(giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}))
// console.log(giveBirthday({firstName: 'Petra', lastName: 'Solano', age: 29}))
// console.log(giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}))

// const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
// const person2 = {firstName: 'Petra', lastName: 'Solano', married: false}
function marry(person1, person2) {
  person1.married = true
  person1.spouseName = `${person2.firstName} ${person2.lastName}`
  person2.married = true
  person2.spouseName = `${person1.firstName} ${person1.lastName}`
}
// marry(person1, person2)
// console.log(person1)
// console.log(person2)

// const person1 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
// const person2 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}
function divorce(person1, person2) {
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
}
// divorce(person1, person2)
// console.log(person1)
// console.log(person2)





// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
