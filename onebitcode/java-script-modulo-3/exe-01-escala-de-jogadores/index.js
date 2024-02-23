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

function climbPlayer() {
    const sectionList = document.querySelector('#sectionList')
    const h3 = document.createElement('h3')
    h3.textContent = 'Jogador'

    const ul = document.createElement('ul')
    
    // Position input
    const positionLi = document.createElement('li')
    const positionLabel = document.createElement('label')
    positionLabel.setAttribute('for', 'position')
    positionLabel.innerText = 'Posição do jogador: '
 
    const playerPosition = document.createElement('input')
    playerPosition.id = 'position'

    positionLi.append(positionLabel, playerPosition)
    ul.appendChild(positionLi)
    
    // Name input
    const nameLi = document.createElement('li')
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.innerText = 'Nome do jogador: '
    
    const playerName = document.createElement('input')
    playerName.id = 'name'
    
    nameLi.append(nameLabel, playerName)
    ul.appendChild(nameLi)
    
    // Number input

    const numberLi = document.createElement('li')
    const numberLabel = document.createElement('label')
    numberLabel.setAttribute('for', 'number')
    numberLabel.innerText = 'N° camisa do jogador: '

    const playerNumber = document.createElement('input')
    playerNumber.id = 'number'

    numberLi.append(numberLabel, playerNumber)
    ul.appendChild(numberLi)

    sectionList.append(h3, ul)
}

