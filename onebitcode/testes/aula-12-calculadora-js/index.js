/*

selecionar elementos necessários
    main        -> ID
    :root       -> CSS
    input       -> ID
    resultInput -> ID
    
definir teclas permitidas
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    
verificar teclas PRESSIONADAS
    teclas extras:
        resultado        -> Igual
        limpar tudo      -> AC
        copiar resultado -> copy
    
verificar teclas DIGITADAS
        remover número -> Backspace 
        resultado      -> Igual
        limpar tudo    -> Escape

Verificar se expressão é válida para calcular
    definir `try & catch` simples
        definir classe .error e texto como ERROR de forma padrão
        
    eval() -> lê e valida códigos JS (perigoso)
        caso esteja tudo certo, remover classe .error

*/

// selecionando elementos necessários
const main   = document.querySelector('main')
const root   = document.querySelector(':root')
const input  = document.querySelector('#input')
const resultInput = document.querySelector('#result')

// definindo teclas permitidas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// verificando teclas que foram PRESSIONADAS, selecionando por classe
document.querySelectorAll('.charKey').forEach( charKeyBtn => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value
        return // finalizando função sem retorno algum
    })
})

// limpar input
document.querySelector('#clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
})

document.querySelector('#equal').addEventListener('click', () => {
    calculate()
})

// verificando e validando teclas DIGITADAS
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (allowedKeys.includes(event.key)) {
        input.value += event.key
        return // finalizando função sem retorno algum
    }

    if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
        return // finalizando função sem retorno algum
    }

    if (event.key === 'Escape') {
        input.value = ''
        input.focus()
    }

    if (event.key === 'Enter') {
        calculate()
    }
})

// validando e calculando valores do input
function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    
    if (input.value == '') {
        resultInput.value = 'ERROR'
        resultInput.classList.add('error')
        return
    }
    else {
        const result = eval(input.value)
        resultInput.value = result
        resultInput.classList.remove('error')
    }
}
// copiando resultado para a área de transferência
document.querySelector('#copyToClipboard').addEventListener('click', (event) => {
    const button = event.currentTarget
    if (button.innerText == 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    }
    else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

// trocando o tema da página
document.querySelector('#themeSwitcher').addEventListener('click', () => {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color',      '#f1f5f9')
        root.style.setProperty('--border-color',  '#aaa')
        root.style.setProperty('--font-color',    '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    }
    else {
        root.style.setProperty('--bg-color',      '#212529')
        root.style.setProperty('--border-color',  '#666')
        root.style.setProperty('--font-color',    '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'

    }
})