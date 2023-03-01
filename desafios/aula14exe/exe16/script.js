function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value <= 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        if(i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c+=p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c-=p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}