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

    mediana(...numbers) {

    }

    moda(...numbers) {

    }
}

const Calcular = new Calculate()

const media = Calcular.media(5, 10)
const mediaPonderada = Calcular.mediaPonderada( { n:7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 } )
const mediana = Calcular.mediana(15, 14, 8, 7, 3)

console.log(mediana)