export function calculate() {
    const input = document.querySelector('#input')
    const resultInput = document.querySelector('#result')

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