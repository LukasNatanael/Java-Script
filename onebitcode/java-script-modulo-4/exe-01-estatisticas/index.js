console.clear()
class Calculate {
    
    mean(...numbers) {
        let soma = numbers.reduce( (accumulate, number) => accumulate + number, 0)
        return soma / numbers.length
    }

    ponderedMean(...numbers) {
        let multNumbers = []
        let weigths = []


        numbers.forEach( (number) => {
            multNumbers.push( number.p * number.n )
            weigths.push(number.p)
        })

        let sumNumbers = multNumbers.reduce( (accumulate, number) => accumulate + number, 0)
        let sumWeigths = weigths.reduce( (accumulate, number) => accumulate + number, 0)

        return sumNumbers / sumWeigths

    }

    mode(...numbers) {
        let numeros = []
        let repetidos = []
        let maior

        numbers.forEach( (number) => {
            if ( !numeros.includes(number) ) {
                numeros.push(number)
            }
        })

        numeros.forEach( (number) => {
            repetidos.push(numbers.filter( repetNumber => repetNumber === number))
        })
        
        repetidos.forEach((number, position) => {
            let quantidade = repetidos[position].length
            if (position === 0) {
                maior = quantidade
            }

            else if (quantidade > maior) {
                maior = [number[0], quantidade]
            }

        })

        return maior[0]
    }

    median(...numbers) {
        // let ordenados = numbers.sort( (a, b) => a - b ) // decreasing order
        let ordenados = numbers.sort( (a, b) => a + b ) // increment order
        let meio

        if (ordenados.length % 2 === 0) {
            meio = parseInt(ordenados.length / 2)
            meio = this.mean( ordenados[meio - 1], ordenados[meio] )
            return meio
        }
        else {
            meio = parseInt(ordenados.length / 2)
            return ordenados[meio]
        }

    }
}

const Calcular = new Calculate()

const media = Calcular.mean(5, 10)
const mediaPonderada = Calcular.ponderedMean( { n:7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 } )
const moda = Calcular.mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)
const mediana = Calcular.median(15, 14, 8, 7, 3)
const medianaDuble = Calcular.median(2, 4, 5, 7, 42, 99)


console.log(`\nMédia: ${media}`)
console.log(`Média Ponderada: ${mediaPonderada}`)
console.log(`Moda: ${moda}`)
console.log(`Mediana: ${mediana}`)
console.log(`Mediana dupla: ${medianaDuble}\n`)