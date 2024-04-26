console.clear()
class Calculate {
    
    media(...numbers) {
        let soma = numbers.reduce( (accumulate, number) => accumulate + number, 0)
        return soma / numbers.length
    }

    mediaPonderada(...numbers) {
        let soma = numbers.reduce( (accumulate, number) => accumulate * number.n, 1)
        return soma
    }

    // mediana() {

    // }

    // moda() {

    // }
}

const Calcular = new Calculate()

const media = Calcular.media(5, 10)
const mediaPonderada = Calcular.mediaPonderada( { n:7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 } )

console.log(mediaPonderada)