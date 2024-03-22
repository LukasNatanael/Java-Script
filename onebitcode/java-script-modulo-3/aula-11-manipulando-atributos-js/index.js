const input = document.querySelector('#input')

document.querySelector('#value').addEventListener('click', () => {
    // input.value = input.value == '' ? 'Hello World!': '' 
    input.value = 'Hello World!' 
    console.log(input.value)
    console.log(input.getAttribute('value')) // pega o valor pré definido no html, o valor inicial
})

document.querySelector('#type').addEventListener('click', () => {
    // input.type = input.type !== 'radio' ? 'radio' : 'text'
    if (input.type !== 'radio') {
        input.setAttribute('type', 'radio')
    }
    else {
        input.setAttribute('type', 'text')
    }
})
document.querySelector('#placeholder').addEventListener('click', () => {
    input.placeholder = 'Digite algo...'
})

document.querySelector('#disable').addEventListener('click', () => {
    // input.setAttribute('disabled', !input.disabled)
    
    input.disabled = input.disabled == true ? false: true
})

document.querySelector('#data').addEventListener('click', () => {
    const data = input.dataset.somethingElse
    console.log(`O valor do atributo data-something-else é: ${data}`)
    input.dataset.something = 'Algum outro valor'
    console.log(`O valor do atributo data-something-else agora é: ${input.dataset.somethingElse}`)
})