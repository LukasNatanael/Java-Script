/*
** é possível fazer isso de duas formas, com prompts ou inputs
    - estou fazendo com inputs
    - fazer com prompts...

** irei fazer das duas formas

Criar um prompt que pergunte:
    - posição do jogador escalado para o time
    - nome do jogador
    - número da camisa do jogador
    - se o jogador será ou não escalado para o time
Criar uma ul na página que lista todos os jogadores escalados

Criar inputs onde é possível inserir:
    - posição do jogador escalado para o time
    - nome do jogador
    - número da camisa do jogador
    - se o jogador será ou não escalado para o time

**Limpar inputs
Criar uma ul na página que lista todos os jogadores escalados

*/

const sectionRegister = document.querySelector('#sectionRegister')
const h3 = document.createElement('h3')

const ul = document.createElement('ul')

ul.setAttribute('role', 'list')
ul.style = 'list-style-type: none;'

// Name input
const nameLi = document.createElement('li')
const nameLabel = document.createElement('label')
nameLabel.setAttribute('for', 'name')
nameLabel.innerText = 'Nome'

const playerName = document.createElement('input')
playerName.type = 'text'
playerName.id = 'name'
playerName.placeholder = 'Nome do jogador'

nameLi.append(nameLabel, playerName)
ul.appendChild(nameLi)

// Position input
const positionLi = document.createElement('li')
const positionLabel = document.createElement('label')
positionLabel.setAttribute('for', 'position')
positionLabel.innerText = 'Posição'

const playerPosition = document.createElement('input')
playerPosition.type = 'text'
playerPosition.id = 'position'
playerPosition.placeholder = 'Posição do jogador'

positionLi.append(positionLabel, playerPosition)
ul.appendChild(positionLi)

// Number input
const numberLi = document.createElement('li')
const numberLabel = document.createElement('label')
numberLabel.setAttribute('for', 'number')
numberLabel.innerText = 'Número'

const playerNumber = document.createElement('input')
playerNumber.type = 'number'
playerNumber.id = 'number'
playerNumber.placeholder = 'N° camisa do jogador'
playerNumber.setAttribute('min', 0)


numberLi.append(numberLabel, playerNumber)
ul.appendChild(numberLi)

const climbButton = document.createElement('button')
climbButton.innerText = 'Escalar'
climbButton.id = 'escalar'

ul.appendChild(climbButton)
// sectionRegister.append(h3, ul)
sectionRegister.append(ul)

const sectionListTop = document.querySelector('#sectionListTop')

// Criando evento para remover jogador atual 
const removeSection = document.createElement('section')
const removeButton  = document.createElement('button')
const removeInput   = document.createElement('input')

removeSection.id = 'remove-section'

removeInput.placeholder = 'N° camisa do jogador a ser removido'
removeInput.type = 'number'

removeInput.setAttribute('min', 0)

removeInput.id = 'remove-input-number'

removeButton.innerText = 'Remover jogador'
removeButton.id = 'remove-input-button'

removeSection.append(removeInput, removeButton)

sectionListTop.appendChild(removeSection)

climbButton.addEventListener( 'click', () => {
    const inputPlayerName     = document.querySelector('#name')
    const inputPlayerPosition = document.querySelector('#position')
    const inputPlayerNumber   = document.querySelector('#number')

    const sectionListBottom = document.querySelector('#sectionListBottom')
    const playerList        = document.createElement('ul')
    const h3                = document.createElement('h3')

    const nameLi     = document.createElement('li')
    const positionLi = document.createElement('li')
    const numberLi   = document.createElement('li')

    // Adicionando jogador a lista de jogadores
    const playerName     = inputPlayerName.value
    const playerPosition = inputPlayerPosition.value
    const playerNumber   = inputPlayerNumber.value

    if (playerName.length == 0 || playerPosition.length == 0 || playerNumber.length == 0) {
        alert('Por favor preencha os dados do jogador!')
    }
    else {
        const confirmation = confirm(
            `Deseja adicionar o jogador ${playerName} com os dados: \n\n` +
            `Nome: ${playerName}\n` +
            `Posição: ${playerPosition}\n` +
            `N° camisa: ${playerNumber}\n`
            )
            
        if (confirmation) {

            nameLi.append(`Nome: ${playerName}`)
            nameLi.id = `${playerNumber}-name`
            
            positionLi.append(`Posição: ${playerPosition}`)
            positionLi.id = `${playerNumber}-position`
            
            numberLi.append(`N° da camisa: ${playerNumber.toLowerCase()}`)
            numberLi.id = `${playerNumber}-number`

            playerList.append(h3, nameLi, positionLi, numberLi)
            playerList.id = `player-${playerNumber}`

            h3.innerText = `Dados do jogador ${playerName}`
            sectionListBottom.append(playerList)
        }

        // Limpando inputs 
        inputPlayerName.value = ''
        inputPlayerPosition.value = ''
        inputPlayerNumber.value = ''
    }


} )

removeButton.addEventListener( 'click', () => {
    const sectionListBottom = document.querySelector('#sectionListBottom')
    const number = document.querySelector('#remove-input-number').value
    const playerToRemove = sectionListBottom.querySelector(`#player-${number}`)

    if (removeInput.length == 0) {
        alert('Por favor insira a camisa do jogador antes de remove-lo do time!')
    }
    else {
        alert(`Camisa ${number} será removido do time!`)
        sectionListBottom.removeChild(playerToRemove)
    }

    document.querySelector('#remove-input-number').value = ''
})
