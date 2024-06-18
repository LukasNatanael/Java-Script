const App = require('./App')

console.clear()

App.createUser( 'Lukas N.', 'contactLukas@gmail.com')
App.createUser( 'Isaac Pontes', 'contactIsaac@gmail.com')
App.createUser( 'Juliana', 'contactJuliana@gmail.com')

App.deposit( 'contactIsaac@gmail.com', 100 )

App.transfer( 'contactIsaac@gmail.com' , 'contactLukas@gmail.com', 20)

App.changeLoanFee(10)
App.takeLoan('contactJuliana@gmail.com', 2000, 6)

console.table(App.findUserByEmail( 'contactIsaac@gmail.com' ).account)
console.table(App.findUserByEmail( 'contactLukas@gmail.com' ).account.data)
console.table(App.findUserByEmail( 'contactJuliana@gmail.com' ).account.data)
console.table(App.findUserByEmail( 'contactJuliana@gmail.com' ).account.loans[0].installments)
