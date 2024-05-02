import { copyToClipboard, themeSwitcher, clearInput } from './mouseEvents.js'
import calculate from './calculate.js'
import pressedKey from './keyboardEvents.js'

document.querySelectorAll('.charKey').forEach( charKeyBtn => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
} )

// Verificando teclas que foram PRESSIONADAS
document.addEventListener('keydown', pressedKey)

// Limpando input
document.querySelector('#clear').addEventListener( 'click', clearInput )

// Copiando resultado para a área de tranferência 
document.querySelector('#copyToClipboard').addEventListener( 'click', copyToClipboard)

// Calculando equação 
document.querySelector('#equal').addEventListener('click', calculate)

// Alterando tema da página
document.querySelector('#themeSwitcher').addEventListener( 'click', themeSwitcher)