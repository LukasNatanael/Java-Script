// Selecionando os elementos
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

// Função que gera número randomico inteiro
// Incluindo mínimo e máximo
function getRandomInt(min, max) {
    // Arredonda para cima; ceil = teto
    min = Math.ceil(min)
    // Arredonda para baixo; floor = piso
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Adicionando escuta no botão de sortear
btnSortear.addEventListener('click', function() {
    // Adicionar animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')
    
    // Tocando efeito sonoro
    dadoRolando.play()
    // Ocultar botão Sortear
    btnSortear.style.display = 'none'
    
    // Usar setTimeout para executar as ações após 1.75 segundos
    setTimeout(function() {
        // Armazenando valor sorteado na váriavel
        numeroSorteado = getRandomInt(1,6)  
        // Escrever o número sorteado no console
        console.log(numeroSorteado)
        // Difinir atributo src com base no número
        imgDado.setAttribute('src', `../images/dado/${numeroSorteado}.png`)
        // Escrever número sorteado no parágrafo numeroSorteado
        sorteado.textContent = numeroSorteado

        // Exibir botão sortear
        btnSortear.style.display = 'inline-block'
        // Retirar animação
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)
})

