console.clear()

let pokemon = 'Charmander'
function evolve() {
    pokemon = 'Charmeleon'
}

console.log(pokemon)
evolve()
console.log(pokemon)

console.log()

// Gera erro pois a variável `animal` está em um escopo `local`
function createAnimal() {
    let animal = 'Pedro, the cat'
    
    // para que funcione é necessário retornar a função
    return animal
}
animal = createAnimal()

// Caso contrário, gera um erro
console.log(animal)

console.log()

// Apenas variáveis declaradas com `var` ficam disponíveis em um escopo mais externo

function evaluateGrade(note) {
    // Para que não gere erro é necessário declarar a variável no mesmo escopo local ao invés de declarar dentro das condições

    // Escopo local
    // let situation = ''

    if (note > 60) {
        // Escopo mais local ainda
        var approved = true
        // let situation = 'Approved'
        situation = 'Approved'
    }
    else {
        // Escopo mais local ainda
        var approved = false
        // let situation = 'Reproved'
        situation = 'Reproved'
    }

    console.log(`Nota: ${note}`)
    console.log(`Aprovado: ${approved}`)
    console.log(`Situação: ${situation}`)
}

evaluateGrade(83)
console.log()
evaluateGrade(49)

console.log()

function hello() {
    var text = 'Hello world!'

    // Mesmo erro da função acima, é necessário retornar a variável para que ela seja exibida em escopo global

    return text
}

console.log(hello())

// A função irá gerar um erro pois ela não possui retorno e foi chamada fora do seu escopo, onde ainda não foi declarada
// console.log(text)

console.log()