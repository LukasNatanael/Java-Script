const App = require('./App')

console.clear()

const users = App.users
App.createUser( 'Lukas N.', 'lukas@gmail.com' )
App.createUser( 'Talita V.', 'talita@gmail.com' )
App.createUser( 'Telia S.', 'telia@gmail.com' )

// console.log(App.users)
App.deposit( 'lukas@gmail.com', 100 )
App.transfer( 'lukas@gmail.com', 'talita@gmail.com', 50)
App.takeLoan( 'telia@gmail.com', 3000, 12 )

console.table(App.users[0].account.data)
console.table(App.users[1].account.data)
console.table(App.users[2].account.data)


// console.log( App.findUserByEmail( users[0].email ) )
// console.log( App.findUserByEmail( 'lukas@gmail.com' ).data )