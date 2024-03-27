const main = document.querySelector('main')
const root = document.querySelector(':root') // :root -> do CSS
const input = document.querySelector('#input')
const resultInput = document.querySelector('#result')

// Definindo teclas que podem ser pressionadas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach( charKeyBtn => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
} )

// Verificando teclas que foram PRESSIONADAS
// input.addEventListener('keydown', (event) => {
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    // Verificando se a tecla pressionada é uma das permitidas
    if (allowedKeys.includes(event.key)) {
        input.value += event.key
        return // para finalizar a função
    }

    if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1) // removendo valores
        return // para finalizar a função
    }

    if (event.key === 'Enter') {
        calculate()
    }

    if (event.key === 'Escape') {
        input.value = ''
        input.focus()
    }
})

// Verificando teclas que foram CLICADAS

// Limpando input
document.querySelector('#clear').addEventListener( 'click', () => {
    input.value = ''
    input.focus()
} )

// Copiando resultado para a área de tranferência 
document.querySelector('#copyToClipboard').addEventListener( 'click', (event) => {
    const button = event.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
        
    }
    else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
} )

document.querySelector('#equal').addEventListener('click', calculate)

function calculate() {
    // Tratamento de erros simples

    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    
    if (input.value == '') {
        resultInput.value = 'ERROR'
        resultInput.classList.add('error')
        return // para finalizar a função
    }
    else {

        const result = eval(input.value)
        // eval() -> é utilizada para ler e analisar códigos JS em formato string 
        resultInput.value = result
        resultInput.classList.remove('error')
    }
}

// Alterando tema da página
document.querySelector('#themeSwitcher').addEventListener( 'click', () => {
    if (main.dataset.theme == 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    }
    else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'

    }
})