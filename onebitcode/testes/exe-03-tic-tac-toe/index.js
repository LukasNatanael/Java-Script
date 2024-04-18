const boardRegions = document.querySelectorAll('#game-board span')
let virtualBoard = []
let turnPlayer

function updateTurn() {
    const playerInput = document.getElementById(turnPlayer)
    document.querySelector('#turn-player').innerText = playerInput.value
}

function initializeGame() {
    virtualBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player-one'
    document.querySelector('h2').innerHTML = '<span id="turn-player"></span> turn!'
    updateTurn()
    boardRegions.forEach( element => {
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handleBoardClick)
    })
}

function disableRegion(element) {
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
}

function handleBoardClick(event) {
    const span = event.currentTarget
    const region = event.currentTarget.dataset.region
    const rowColumnPair = region.split('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]

    if (turnPlayer === 'player-one') {
        span.innerText = 'X'
        virtualBoard[row][column] = 'X'
    }
    else {
        span.innerText = 'O'
        virtualBoard[row][column] = 'O'
    }
    console.clear()
    console.table(virtualBoard)

    disableRegion(span)
}

document.querySelector('#start-game').addEventListener('click', initializeGame)