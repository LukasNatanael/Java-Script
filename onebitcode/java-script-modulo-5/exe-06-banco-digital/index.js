const App = require('./App')

console.clear()

App.createUser( 'Lukas N.', 'contactLukas@gmail.com')
App.createUser( 'Isaac Pontes', 'contactIsaac@gmail.com')
App.createUser( 'Juliana', 'contactJuliana@gmail.com')

const users = App.users

App.deposit( 'contactIsaac@gmail.com', 100 )

console.log( users[0].account.balance )
console.log( users[1].account.balance )

// analisar
App.transfer( 'contactIsaac@gmail.com' , 'contactLukas@gmail.com', 20)

console.log( users[0].account.data )
console.log( users[1].account.data )