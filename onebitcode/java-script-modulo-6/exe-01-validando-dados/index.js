import Email from './Email.js'
import Password from './Password.js'

// console.clear()
// console.log( new Email('mathRugan007@gmail.com'))
// console.log( new Password('!1B-2a_b3C@[$]'))

document.querySelector('#send').addEventListener('click', () => {
    const name     = document.querySelector('#name').value
    const email    = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const nameError  = document.querySelector('#nameError')
    const emailError = document.querySelector('#emailError')
    const passError  = document.querySelector('#passError')

    console.clear()
    const invalidEmail = new Email(email)
    const invalidPass  = new Password(password)
    
    if (name === '') {
        nameError.classList.add('error')
        nameError.innerText = 'Please enter a name'
        
        }
    else if (name.length < 2) {
        nameError.classList.add('error')
        nameError.innerText = 'Name must be at least 2 characters'
        }
    else {
        nameError.classList.remove('error')
        nameError.classList.add('invisible')
    }

    if (invalidEmail) {
        emailError.classList.add('error')
        emailError.innerText = invalidEmail.toString().match(/(?<=\: ).+/)
    }

    if (invalidPass) {
        passError.classList.add('error')
        passError.innerText = invalidPass.toString().match(/(?<=\: ).+/)
    }
    
})
