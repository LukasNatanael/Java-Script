import calculate from "./calculate.js"
export function pressedKey(event) {
    // Definindo teclas que podem ser pressionadas
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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
}