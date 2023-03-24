// Informações

const nome = 'Lukas Silva'
const nacionalidade = 'Brasileiro'
const idade = 22
const peso = 75
const altura = 1.70

document.write(`
    <div class="card">
        <img src="https://phantom-marca.unidadeditorial.es/8282d52f4aa22fde9df400211365fbb3/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/05/16755519728234.jpg">
        <p> ${nome} </p>
        <p> ${nacionalidade} </p>
        <p> ${idade} anos </p>
        <p> ${peso}Kg </p>
        <p> ${altura.toFixed(2)}m </p>
    </div>
`)

/* ------------------------------------------------------------*/

// Frase do dia

const dia = 24
const mes = 3
const ano = 2023
const data = `${dia}/${mes}/${ano}`
const frase = 'Seja curioso. Leia tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.'
const autor = 'Aaron Swartz'

document.write(`
    <div class="citacao">
        <h2> Frase do dia </h2>
        <p id="data"> ${data} </p>
        <blockquote> "${frase}" </blockquote>
        <p id="autor"> ${autor} </p>
    </div>
    `)

/* ------------------------------------------------------------*/

// Meses do ano
document.write('<h1>Array de meses do ano</h1>')
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Julho', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const dias = [
    1, 2,3, 4,5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
]

document.write(`
    <div class="container">
        <div class="meses">
            <h3>${meses[0]}</h3>
            <p>${dias.slice(0, 10)}</p>
            <p>${dias.slice(10, 17)}</p>
            <p>${dias.slice(17, 24)}</p>
            <p>${dias.slice(24, 31)}</p>
            </div>
        <div class="meses">
            <h3>${meses[1]}</h3>
            <p>${dias.slice(0, 10)}</p>
            <p>${dias.slice(10, 17)}</p>
            <p>${dias.slice(17, 24)}</p>
            <p>${dias.slice(24, 31)}</p>
        </div>
    </div>
`)

/* ------------------------------------------------------------*/

// Objeto de jogo
const jogo = {
    nome: 'League Of Legends',
    sigla: 'LOL',
    desenvolvedor: 'Riot games',
    lancamento: 2009
}

document.write(`
    <div class="jogo">
        <h2>Jogo</h2>
        <p>Título</p>
            <span>${jogo['nome']} - ${jogo['sigla']}</span>
        <p>Desenvolvedor</p>
            <span>${jogo['desenvolvedor']}</span>
        <p>Ano de lançamento </p>
            <span>${jogo['lancamento']}</span>
    </div>
`)