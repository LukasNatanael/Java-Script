// Criando variáveis
var form_inicio = document.querySelector('input#inicio')
var form_fim = document.querySelector('input#fim')
var form_passo = document.querySelector('input#passo')
var resultado = document.querySelector('div#resultado')

// Iniciando o laço

function contar() {
    // alert(`início: ${form_inicio.value}; fim: ${form_fim.value}: passo: ${form_passo.value}`)

    for (form_inicio.value++; form_inicio.value <= form_fim.value; form_passo.value) {
        resultado.innerHTML = form_inicio.value
    }
}