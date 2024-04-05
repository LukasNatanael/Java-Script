const buttons = document.querySelectorAll('.box')
let clickCont = 0
let cont = 0
let botao 
const allowedKeys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']
const winnerPositions = [
    [1, 2, 3],
    [4, 5 ,6],
    [7, 8, 9],
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
    [7, 5, 3],
    [9, 5, 1],
]

const playerOne = document.querySelector('#player-one')
const playerTwo = document.querySelector('#player-two')

playerOne.classList.add('player-round')

document.addEventListener('keydown', (event) => {
    event.preventDefault()

    buttons.forEach( element => {
        if (event.key == element.id) {
            cont % 2 === 0 ? botao = '<i class="icons fa-solid fa-x"></i>': botao = '<i class="icons fa-regular fa-circle"></i>'
            
            if (element.disabled != true) {
                element.innerHTML = botao
                element.disabled = true
                if (cont % 2 === 0) {
                    playerOne.classList.add('player-round')
                    playerTwo.classList.remove('player-round')
                    element.dataset.key = 'X'
                }
                else {
                    playerTwo.classList.add('player-round')
                    playerOne.classList.remove('player-round')
                    element.dataset.key = 'O'
                }
                
                cont += 1
                checkWinner()
            }

        }
    })

})


document.querySelectorAll('button').forEach( element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        cont % 2 === 0 ? botao = '<i class="icons fa-solid fa-x"></i>': botao = '<i class="icons fa-regular fa-circle"></i>'

        if (element.disabled != true) {
            element.disabled = true
            element.innerHTML = botao
            if (cont % 2 === 0) {
                playerOne.classList.add('player-round')
                playerTwo.classList.remove('player-round')
                element.dataset.key = 'X'
            }
            else {
                playerTwo.classList.add('player-round')
                playerOne.classList.remove('player-round')
                element.dataset.key = 'O'

            }
            cont += 1
            checkWinner()
        }
        
    })
})


document.querySelector('#play-again').addEventListener('click', () => {
    clickCont = 0
    const numbers = [
        7, 8, 9,
        4, 5, 6,
        1, 2, 3
    ]

    buttons.forEach( element => {
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
        7, 8, 9,
        4, 5, 6,
        1, 2, 3
    ]

    if (event.key === 'Escape') {
        
        buttons.forEach( element => {
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


function checkWinner() {
    // criando sistema de pontuação

    for (pattern in winnerPositions) {
        console.log(
            winnerPositions[pattern][0],
            winnerPositions[pattern][1],
            winnerPositions[pattern][2]
        )
        
        console.log(
            buttons[[pattern][0]].dataset.key,
            // buttons[[pattern][1]].dataset.key,
            // buttons[[pattern][2]].dataset.key
        )
    }

}