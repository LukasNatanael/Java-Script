const button = document.querySelectorAll('button')
let cont = 0
let botao 
const allowedKeys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']

const playerOne = document.querySelector('#player-one')
const playerTwo = document.querySelector('#player-two')

playerOne.classList.add('player-round')

document.addEventListener('keydown', (event) => {
    event.preventDefault()

    document.querySelectorAll('button').forEach( element => {
        if (event.key == element.id) {
            // console.log(element)
            value = element
            
            // cont = 0
            if (allowedKeys.includes(event.key)) {
                if (cont % 2 === 0) {
                    playerTwo.classList.add('player-round')
                    playerOne.classList.remove('player-round')
                    botao = '<i class="icons fa-solid fa-x"></i>'
                }
                else {
                    playerOne.classList.add('player-round')
                    playerTwo.classList.remove('player-round')
                    botao = '<i class="icons fa-regular fa-circle"></i>'
                }

                value.innerHTML = botao
                console.log(cont)
            }
        }
        cont += 1
    })

})
    


document.querySelectorAll('button').forEach( element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        if (cont % 2 === 0) {
            playerTwo.classList.add('player-round')
            playerOne.classList.remove('player-round')
            event.currentTarget.innerHTML = '<i class="icons fa-solid fa-x"></i>'
            botao = '<i class="icons fa-solid fa-x"></i>'
            element.disabled = true
        }
        else {
            playerOne.classList.add('player-round')
            playerTwo.classList.remove('player-round')
            event.currentTarget.innerHTML = '<i class="icons fa-regular fa-circle"></i>'
            botao = '<i class="icons fa-regular fa-circle"></i>'
            element.disabled = true
            
        }

        cont += 1
        
    })
})


document.querySelector('#play-again').addEventListener('click', () => {
    cont = 0
    const numbers = [
        7, 4, 1,
        8, 5, 2,
        9, 6, 3
    ]

    button.forEach( element => {
        element.innerHTML = numbers[cont]
        element.disabled = false
        playerOne.classList.add('player-round')
        playerTwo.classList.remove('player-round')
        if (cont == 8) {
            cont = 0
            
        }
        else {
            cont += 1
        }
    })
})

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    cont = 0
    const numbers = [
        7, 4, 1,
        8, 5, 2,
        9, 6, 3
    ]

    if (event.key === 'Escape') {
        
        button.forEach( element => {
            element.innerHTML = numbers[cont]
            element.disabled = false
            playerOne.classList.add('player-round')
            playerTwo.classList.remove('player-round')
            if (cont == 8) {
                cont = 0
                
            }
            else {
                cont += 1
            }
        })
    }

})