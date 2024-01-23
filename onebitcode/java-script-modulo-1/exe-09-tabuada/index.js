var number = parseFloat(prompt('Informe um valor: '))
let multiplicationTable = ''

for (let factor = 1; factor <=20; factor++) {
    multiplicationTable += `${factor} x ${number} = ${factor*number}\n`
}

alert(`Tabuada do ${number} \n${multiplicationTable}`)