// Arquivo JS externo

document.write('Olá Mundo!')
console.log('Olá Mundo no console!')
// alert('Olá mundo no alerta')

// permite que a variável mude
let mensagem = 'Minha mensagem'
let mensagem2 = 'Outra mensagem'

/* 
    snake case
    let meu_peso = 62 
*/

// camel case
let meuPeso = 62
let minhaAltura = 1.67
let minhaIdade = 18
// Para evitar uso de acentuação usa-se H junto a letra
let ehDoador = false

/* 
    Forma de definir uma váriavel vazia:
    let teste =  null
    let teste =  undefined
    let teste =  false
    let teste =  ''
    let teste =  ``
*/

let teste = null

// Criar constantes e atribuir valor. São valores que não mudam
// Geralmente constantes são em UPERCASE
const PI = 3.1415
const TAXA = 0.5

teste = 'Algum conteúdo'

// ESCREVER O CONTEUDO DE VARIAVEIS e CONSTANTES

document.write(`<p> Mensagem: ${mensagem}</p>`)
document.write(`<p> Mensagem2: ${mensagem2}</p>`)
document.write(`<p> Peso: ${meuPeso}KG</p>`)
document.write(`<p> Altura: ${minhaAltura}m</p>`)
document.write(`<p> Idade: ${minhaIdade} anos</p>`)
document.write(`<p> Doador ? ${ehDoador}</p>`)
document.write(`<p> Teste: ${teste}</p>`)
document.write(`<p> PI: ${PI}</p>`)
document.write(`<p> TAXA: ${TAXA}</p>`)