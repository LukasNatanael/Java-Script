console.clear()
class Calculate {
    
    average(...numbers) {
        let sum = numbers.reduce( (accumulate, number) => accumulate + number, 0)
        return sum / numbers.length
    }

    weightedAverage(...entries) {
        let sum = entries.reduce((accumulate, { number, weigth }) => accumulate + ( number * (weigth ?? 1)), 0 )
        let weigthSum = entries.reduce((accumulate, entry) => accumulate + (entry.weigth ?? 1), 0)

        return sum / weigthSum
    }

    median(...numbers) {
        let orderedNumbers = [...numbers].sort( (a, b) => a - b )
        let middle = parseInt(orderedNumbers.length / 2)

        if (orderedNumbers.length % 2 === 0) {
            middle = this.average( orderedNumbers[middle - 1], orderedNumbers[middle] )
            return middle
        }
        else {
            middle = parseInt(orderedNumbers.length / 2)
            return orderedNumbers[middle]
        }

    }

    mode(...numbers) {
        // [ [num, qtd], [num, qtd], [num, qtd] ]
        const quantities = numbers.map( num => [
            num,
            numbers.filter( n => n === num ).length
        ] )

        quantities.sort( (a, b) => b[1] - a[1] )
        
        return quantities[0][0]
    }
}

const Calcular = new Calculate()

const media = Calcular.average(5, 10)
const mediaPonderada = Calcular.weightedAverage(
    { number: 9, weigth: 3 },
    { number: 7 },
    { number: 10, weigth: 1 }
)
const moda = Calcular.mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)
const mediana = Calcular.median(15, 14, 8, 7, 3)
const medianaDuble = Calcular.median(2, 4, 5, 7, 42, 99)


console.log(`\nMédia: ${media}`)
console.log(`Média Ponderada: ${mediaPonderada}`)
console.log(`Moda: ${moda}`)
console.log(`Mediana: ${mediana}`)
console.log(`Mediana dupla: ${medianaDuble}\n`)