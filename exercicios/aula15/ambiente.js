let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impar = []
let par = []
let languages = ['.py', '.bat', '.ps1', '.html', '.css', '.js']

console.log(languages.sort())

console.log('Utilizando for')

for(let c=0; c<=num.length; c++) {
    num[c] % 2 == 0 ? impar.push(c): par.push(c)
}

console.log(`Pares: ${par}`)
console.log(`Ímpares: ${impar}`)

console.log('')

console.log('Utilizando do while')
par = []
impar = []

let c = 0
do {
    num[c] % 2 == 0 ? impar.push(c): par.push(c)
    c++
} while (c<=num.length)

console.log(`Pares: ${par}`)
console.log(`Ímpares: ${impar}`)

console.log('')
console.log('Utilizando while')
par = []
impar = []
c = 0

while(c <= num.length) {
    num[c] % 2 == 0 ? impar.push(c): par.push(c)
    c++
}

console.log(`Pares: ${par}`)
console.log(`Ímpares: ${impar}`)

console.log('')
console.log('Utilizando for in')

for (let lang in languages) {
    console.log(`${languages[lang]}`)
}

let pos = num.indexOf(12)

pos == -1 ? console.log('Valor não encontrado!'): console.log(`O valor esta na posição ${pos}.`)