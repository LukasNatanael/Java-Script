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
        element.classList.add('cursor-pointer')
        element.addEventListener('click', handleBoardClick)
    })
}

function getWinRegions() {
    const winRegions = []
    if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")

    if (virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")

    if (virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")

    if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][0] && virtualBoard[0][0] === virtualBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")

    if (virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[0][1] === virtualBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")

    if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[0][2] === virtualBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")

    if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[0][0] === virtualBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")

    if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][1] && virtualBoard[0][2] === virtualBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")

    return winRegions
}

function disableRegion(element) {
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}

function handleWin(regions) {
    regions.forEach(region => {
        document.querySelector(`[data-region="${region}"]`).classList.add('win')
    })
    const playerName = document.querySelector(`#${turnPlayer}`).value
    document.querySelector('h2').innerHTML = `${playerName} is the winner!`
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

    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
        handleWin(winRegions)
    }
    else if (virtualBoard.flat().includes('')) {
        turnPlayer = turnPlayer === 'player-one' ? 'player-two': 'player-one'
        updateTurn()
    }
    else {
        document.querySelector('h2').innerHTML = 'DRAW  '
    }
}

document.querySelector('#start-game').addEventListener('click', initializeGame)