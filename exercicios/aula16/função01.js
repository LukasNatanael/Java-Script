function parimp(num) {
    // num % 2 == 0 ? return 'par': return 'impar'
    if (num%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

console.log(`O valor é ${parimp(11)}`)