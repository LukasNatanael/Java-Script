import Email from './Email.js'
import Password from './Password.js'

// console.clear()
// console.log( new Email('mathRugan007@gmail.com'))
// console.log( new Password('!1B-2a_b3C@[$]'))

document.querySelector('#send').addEventListener('click', (event) => {
    // event.preventDefault()
    const email    = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const emailError = document.querySelector('#emailError')
    const passError  = document.querySelector('#passError')

    console.clear()
    const invalidEmail = new Email(email)
    const invalidPass  = new Password(password)
    
    if (invalidEmail) {
        emailError.classList.add('error')
        emailError.innerText = invalidEmail.toString().match(/(?<=\: ).+/)
    }

    if (invalidPass) {
        passError.classList.add('error')
        passError.innerText = invalidPass.toString().match(/(?<=\: ).+/)
    }
    
})
