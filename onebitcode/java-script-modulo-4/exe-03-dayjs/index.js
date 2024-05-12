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

const today = dayjs(new Date())
const lukasBirthday = dayjs('2004/09/12')

// Diferença de ANOS
let lukasAge = today.diff(lukasBirthday, 'year')

// meses faltantes
const mesesFaltantes = lukasBirthday.month() - today.month()
let diasFaltantes = today.date() - lukasBirthday.date()
diasFaltantes < 0 ? diasFaltantes *= -1: diasFaltantes

let diasAteAniversario = (today.daysInMonth() * mesesFaltantes) + diasFaltantes


let lukasNextBirthday, msg

if (mesesFaltantes === -1) {
    lukasNextBirthday = `${lukasBirthday.date()}/${lukasBirthday.add(1, 'month').month()}/${today.add( 1, 'year' ).year()}`
    lukasAge += 1
    msg = 'Feliz aniversário!'
}
else {
    lukasNextBirthday = `${lukasBirthday.date()}/${lukasBirthday.add(1, 'month').month()}/${today.year()}`
    msg = `${diasFaltantes} dias e ${mesesFaltantes} meses para seu aniversário.`
}

console.log(`Atualmente Lukas tem ${lukasAge} anos e seu próximo aniversário será: ${lukasNextBirthday}. \nAinda restam ${diasAteAniversario} dias de espera ou ${msg}`)

console.log()

let contDays = []

for (let cont = mesesFaltantes; cont > 0; cont --) {
    // console.log(cont)
    // console.log(today.add(cont, 'month').daysInMonth())
    contDays.push(today.add(cont, 'month').daysInMonth())
}

let sum = contDays.reduce( (acumullate, num) => acumullate += num, 0 )

console.log(sum)


