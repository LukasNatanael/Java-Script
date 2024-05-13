const dayjs = require('dayjs')

console.clear()

/*
    Métodos a serem utilizados:
        - format -> formatar data
        - add    -> adicionar um intervalo de tempo entre as datas
        - diff   -> calcular a diferença de uma data e outra

    receber data de nascimento de uma pessoa
    idade no momento atual
    próxima data de aniversário
    dias faltantes para póximo aniversário

*/

const today = dayjs(new Date(), 'br')
const lukasBirthday = dayjs('2004/07/13')

// Diferença de ANOS
let lukasAge = today.diff(lukasBirthday, 'year')

// meses faltantes
const mesesFaltantes = lukasBirthday.month() - today.month()

// dias faltantes
let contDays = []

for (let cont = mesesFaltantes; cont > 0; cont --) {
    contDays.push(today.add(cont, 'month').daysInMonth())
}

// somando dias de cada mês seguinte para calcular os dias
contDays = contDays.reduce( (acumullate, num) => acumullate += num, 0 )

let diasFaltantes = contDays + (today.date() - lukasBirthday.date())
diasFaltantes < 0 ? diasFaltantes *= -1: diasFaltantes

let lukasNextBirthday, msg

if (diasFaltantes === 0) {
    lukasNextBirthday = dayjs(new Date(today), 'DD/MM/YYYY').add(1, 'year')
    msg = 'Feliz aniversário!'
}
else {
    // lukasNextBirthday = `${lukasBirthday.date()}/${lukasBirthday.add(1, 'month').month()}/${today.year()}`
    msg = `Ainda restam ${diasFaltantes} dias de espera.`

    lukasNextBirthday = dayjs(new Date(today), 'DD/MM/YYYY')

    // console.log(lukasNextBirthday)

}

console.log(`Atualmente Lukas tem ${lukasAge} anos e seu próximo aniversário será: ${lukasNextBirthday.date()}/${lukasBirthday.add(1, 'month').month()}/${lukasNextBirthday.year()}. \n${msg}`)

console.log()
