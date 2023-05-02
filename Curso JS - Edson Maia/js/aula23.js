// let relogio = document.querySelector('#relogio')
// let h = document.querySelector('#h')
// let m = document.querySelector('#m')
// let s = document.querySelector('#s')

// Pegando os elementos no DOM
let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart = document.querySelector('#sSmart')

let data = document.querySelector('#data')
let semana = document.querySelector('#semana')

//_______ Pegando data e hora atuais do computador _______
// Pegando hora atual do computador

let dataHora = new Date()
console.log(dataHora)

function moveRelogio() {

  let momentoAtual = new Date()
  let hora = momentoAtual.getHours()
  let minuto = momentoAtual.getMinutes()
  let segundo = momentoAtual.getSeconds()

  // Transformando dados em uma NOVA STRING
  let strHora = new String(hora)
  let strMinuto = new String(minuto)
  let strSegundo = new String(segundo)

  // Verificando se a string tem 1 ou 2 elementos: [8 => 08], [12 => 12]
  if (strSegundo.length == 1) segundo = "0" + segundo 
  if (strMinuto.length == 1) minuto = "0" + minuto 
  if (strHora.length == 1) hora = "0" + hora 

  // Adicionando variáveis na página
  // Decidi não mostrar
  h.textContent = hora
  m.textContent = minuto
  s.textContent = segundo
  
  // Esse é o que aparece
  hSmart.textContent = hora
  mSmart.textContent = minuto
  sSmart.textContent = segundo

  // Adicionando tempo de atualização para o relógio
  setTimeout("moveRelogio()", 100)
}

// Pegando hora atual do computador

function pegarData() {

  let diaDaSemana = dataHora.getDay()
  let dia = dataHora.getDate()
  let mes = dataHora.getMonth()+1 // Adiciona +1 porque começa com 0
  let ano = dataHora.getFullYear()

  // Transformando dados em uma NOVA STRING
  let strDia = new String(dia)
  let strMes = new String(mes)

  // Verificando se a string tem 1 ou 2 elementos: [8 => 08], [12 => 12]
  if (strDia.length == 1 ) dia = `0${dia}`
  if (strMes.length == 1 ) mes = `0${mes}`

  // Poderia usar o switch case, mas ficaria muito extenso
  diaDaSemanaExtenso = [
    'Domingo',
    'Segunda - feira',
    'Terça - feira',
    'Quarta - feira',
    'Quinta - feira',
    'Sexta - feira',
    'Sábado'
  ]

  diaDaSemana = diaDaSemanaExtenso[diaDaSemana]
  let dataAtual = `${dia}/${mes}/${ano}`

  semana.textContent = diaDaSemana
  data.textContent = dataAtual

}

// Evocar a função
pegarData()

var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

//________________________ Testes ________________________
let teste = new Date()

console.log(teste.toLocaleString('pt-BR'))
console.log(teste.toLocaleString('pt-BR', options))
console.log(teste.toLocaleDateString('pt-BR', options))
console.log(teste.toLocaleTimeString('pt-BR', options))

// _____________ Pegando a temperatura ___________________
function getUserPosition() {
  let url = ''
  navigator.geolocation.getCurrentPosition((pos) => {
    let latitude = pos.coords.latitude
    let longitude = pos.coords.longitude
    
    // API de CLIMA
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`

    fetchApi(url)
    console.log(url)
  })
}

function fetchApi(url) {
  let cidade = document.querySelector('.cidade')
  let temperatura = document.querySelector('#temperatura')
  let umidade = document.querySelector('#umidade')

  fetch(url).then((data) => {
    return data.json()
  }).then((data) => {
    let tempEmCelsius = ((5/9) * (data.main.temp-32)).toFixed(1)
    // Por algum motivo esses dados não são exibidos
    cidade.textContent = data.name
    console.log(data.name)
    umidade.textContent = data.main.humidity
    console.log(data.main.humidity)
    temperatura.textContent = tempEmCelsius

  }).catch((err) => {
    cidade.textContent = `Impossível acessar o OpenWeather. Verifique sua conexão.`
    temperatura.textContent = '-'
  })
}

// Evocar a função
getUserPosition()