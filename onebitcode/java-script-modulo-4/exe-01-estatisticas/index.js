console.clear()
class Calculate {
    
    media(...numbers) {
        let soma = numbers.reduce( (accumulate, number) => accumulate + number, 0)
        return soma / numbers.length
    }

    mediaPonderada(...numbers) {
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

    // mediana(...numbers) {

    // }

    moda(...numbers) {
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
            // console.log(`O número: ${number[0]} aparece: ${quantidade}`)

            if (position === 0) {
                maior = quantidade
            }
            else if (quantidade > maior) {
                maior = [number[0], quantidade]
            }

        })

        // console.log(`O número: ${maior[0]} apareceu ${maior[1]} vezes`)
        return maior[0]
    }
}

const Calcular = new Calculate()

const media = Calcular.media(5, 10)
const mediaPonderada = Calcular.mediaPonderada( { n:7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 } )
const moda = Calcular.moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)

// const mediana = Calcular.mediana(15, 14, 8, 7, 3)

console.log(`\nMédia: ${media}`)
console.log(`Média Ponderada: ${mediaPonderada}`)
console.log(`Moda: ${moda}\n`)