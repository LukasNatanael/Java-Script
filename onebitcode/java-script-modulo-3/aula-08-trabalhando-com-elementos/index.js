function register(event) {
    console.log(event)
    const sectionElement = event.currentTarget.parentNode

    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Usuário ${username} cadastrado!`)
    }
    else {
        alert(`As senhas não coincidem`)
    }
}

const button = document.querySelector('#register-button')
button.addEventListener( 'click', register )

function removeEvent() {
    button.removeEventListener('click', register)
    alert('Event removed!')
}

button.addEventListener( 'mouseover', (event) => {
    console.log('Username: ' + event.currentTarget.parentNode.children.username.value)
} )