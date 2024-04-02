const button = document.querySelectorAll('button')

const allowedKeys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']

document.addEventListener('keydown', (event) => {
    const value = event.key
    if (allowedKeys.includes(value)) {
        console.log(value)
    }

})

let cont = 0

document.querySelectorAll('button').forEach( element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        // event.currentTarget.style.backgroundColor = 'red'
        // event.currentTarget.innerText = 'red'

        if (cont === 8) {
            alert('Fim de jogo')
        }
        else {
            cont += 1
        }

        if (cont % 2 === 0) {
            event.currentTarget.innerHTML = '<i class="icons fa-solid fa-x"></i>'
            element.disabled = true
        }
        else {
            event.currentTarget.innerHTML = '<i class="icons fa-regular fa-circle"></i>'
            element.disabled = true
            
        }
        
    })
})


document.querySelector('#play-again').addEventListener('click', () => {
    button.forEach( element => {
        element.innerHTML = ''
        element.disabled = false
    })
    cont = 0
})