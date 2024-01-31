console.clear()

function hello() {
    console.log('Hello')
}

hello()

function duble(x) {
    console.log(`O dobro de ${x} é ${x * 2}`)
}

duble(2)

function sayHello(name='World') {
    console.log(`Hello ${name}!`)
}

function sum(a, b) {
    console.log(`O resultado da soma é ${a + b}`)
    
}

sum(5, 2)


function registerUser(name, email, pass, type) {
    const user = {
        name,
        email,
        pass,
        type
    }

    console.log(`${user.name} has been registred with sucessful.`)
}

registerUser('Lukas', 'lukas@lukas.lukas', '12345678', 'admin')

function objectWithParameters(user) {
    user.name
    user.number
    user.address
    user.birthday
    user.email
    user.pass

    console.log(user)
}

const userData = {
    name: 'Lukas',
    number: 99999999,
    addres: 'somewhere',
    birthday: 2000,
    email: 'email@email.com',
    pass: 12345678
}

objectWithParameters(userData)