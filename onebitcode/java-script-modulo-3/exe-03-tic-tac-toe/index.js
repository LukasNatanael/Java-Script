const boxes = document.querySelectorAll('.box')
const playerOne = document.querySelector('#player-one')
const playerTwo = document.querySelector('#player-two')
let playerOnePoints = document.querySelector('#player-one-points')
let playerTwoPoints = document.querySelector('#player-two-points')

let botao 
let clickCont = cont = 0
let playerOnePoint = 0
let playerTwoPoint = 0


const allowedKeys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9']
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]



playerOne.classList.add('player-round')
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    
    boxes.forEach( element => {
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
            playerTwo.classList.add('player-round')
            playerOne.classList.remove('player-round')

            element.disabled = true
            element.innerHTML = botao
            if (cont % 2 === 0) {
                element.dataset.key = 'X'
            }
            else {
                playerOne.classList.add('player-round')
                playerTwo.classList.remove('player-round')
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

    boxes.forEach( element => {
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
        
        boxes.forEach( element => {
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

    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].dataset.key
        let position2 = boxes[pattern[1]].dataset.key
        let position3 = boxes[pattern[2]].dataset.key

        
        if (position1 != '' && position2 != '' && position3 != '') {
            if (position1 === position2 && position1 === position3) {
                alert('Winner is '+ position1)
                if (position1 === 'O') {
                    playerOnePoint += 1
                    playerOnePoints.innerText = playerOnePoint
                }
                else {
                    playerTwoPoint += 1
                    playerTwoPoints.innerText = playerTwoPoint
                }
                // document.querySelector('#play-again').click()
                
                boxes[pattern[0]].dataset.key = ''
                boxes[pattern[1]].dataset.key = ''
                boxes[pattern[2]].dataset.key = ''
            }
        }
        
    }
}