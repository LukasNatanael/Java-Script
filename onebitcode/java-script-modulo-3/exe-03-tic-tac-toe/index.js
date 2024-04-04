const button = document.querySelectorAll('button')
let clickCont = 0
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
                    botao = '<i class="icons fa-solid fa-x"></i>'
                    element.dataset.key = 'X'
                    
                }
                else {
                    botao = '<i class="icons fa-regular fa-circle"></i>'
                    element.dataset.key = 'O'

                }

            }

            cont += 1

            if (element.disabled != true) {
                value.innerHTML = botao
                element.disabled = true
                if (cont % 2 === 0) {
                    playerOne.classList.add('player-round')
                    playerTwo.classList.remove('player-round')
                }
                else {
                    playerTwo.classList.add('player-round')
                    playerOne.classList.remove('player-round')
                }

            }

        }
    })

})


document.querySelectorAll('button').forEach( element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        if (cont % 2 === 0) {
            botao = '<i class="icons fa-solid fa-x"></i>'
        }
        else {
            botao = '<i class="icons fa-regular fa-circle"></i>'
        }

        cont += 1

        if (element.disabled != true) {
            element.disabled = true
            element.innerHTML = botao
            if (cont % 2 === 0) {
                playerOne.classList.add('player-round')
                playerTwo.classList.remove('player-round')
                element.dataset.key = 'O'
            }
            else {
                playerTwo.classList.add('player-round')
                playerOne.classList.remove('player-round')
                element.dataset.key = 'X'

            }

        }
        
    })
})


document.querySelector('#play-again').addEventListener('click', () => {
    clickCont = 0
    const numbers = [
        7, 4, 1,
        8, 5, 2,
        9, 6, 3
    ]

    button.forEach( element => {
        element.innerHTML = numbers[clickCont]
        element.disabled = false
        playerOne.classList.add('player-round')
        playerTwo.classList.remove('player-round')
        if (clickCont == 8) {
            clickCont = 0
            
        }
        else {
            clickCont += 1
        }
    })
})

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    clickCont = 0
    const numbers = [
        7, 4, 1,
        8, 5, 2,
        9, 6, 3
    ]

    if (event.key === 'Escape') {
        
        button.forEach( element => {
            element.innerHTML = numbers[clickCont]
            element.disabled = false
            playerOne.classList.add('player-round')
            playerTwo.classList.remove('player-round')
            if (clickCont == 8) {
                clickCont = 0
                
            }
            else {
                clickCont += 1
            }
        })
    }

})

if (cont % 2 === 0) {
    playerOne.classList.add('player-round')
    playerTwo.classList.remove('player-round')
}
else {
    playerTwo.classList.add('player-round')
    playerOne.classList.remove('player-round')
}