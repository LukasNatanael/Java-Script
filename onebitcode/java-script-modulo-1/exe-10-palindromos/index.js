let word = prompt('Informe uma palvra: ').toLowerCase()
let inverseWord = '';

console.log(inverseWord)

for (let letter = word.length-1; letter >= 0; letter--) {
    inverseWord += word[letter].toLowerCase()
}

if (word === inverseWord) {
    alert(`${word} é uma palavra PALINDROMA`)
    console.log(`${word} == ${inverseWord}`)
}
else {
    alert(`${word} não é uma palavra PALINDROMA`)
    console.log(`${word} != ${inverseWord}`)
}