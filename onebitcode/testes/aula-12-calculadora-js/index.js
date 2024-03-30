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

const main = document.querySelector('main')
const root = document.querySelector(':root') // :root do CSS
const input = document.querySelector('#input')
const resultInput = document.querySelector('#result')

// definindo teclas que podem ser pressionadas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Verificando botões que foram PRESSIONADOS
document.querySelectorAll('.charKey').forEach( charkeyBtn => {
    // verificando qual tecla foi pressionada
    charkeyBtn.addEventListener('click', () => {
        const value = charkeyBtn.dataset.value
        input.value += value
        return // finalizando função
    })
} )

// Verificando botões que foram DIGITADOS
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    
    if (allowedKeys.includes(event.key)) {
        input.value += event.key
    }

    if (charkeyBtn.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
        return // finalizando função
    }
    
    if (charkeyBtn.key === 'Enter') {
        calculate()
    }
    
    if (charkeyBtn.key === 'Escape') {
        input.value = ''
        input.focus()
    }

})

function calculate() {
    const result = eval(input.value)
    resultInput.value = result
}