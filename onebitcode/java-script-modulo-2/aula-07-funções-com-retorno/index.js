console.clear()

function calculateMedia(a, b) {
    const media = (a + b) /2
    return media
}

let media = calculateMedia(5, 7)
console.log(`Media: ${media}`)

console.log()

function createProduct(name, price) {
    const product = {
        name,
        price,
        stock: 1
    }
    return product
}

console.log(createProduct('Notebook i7 12ªgeração 16GB', 3500))

console.log()

function retangleArea(base, height) {
    const area = base * height
    return area
}

function squareArea(side) {
    return retangleArea(side, side)
}

console.log(`Retangle area: ${retangleArea(3, 5)}m²`)
console.log(`Square area: ${squareArea(3)}m²`)

console.log()

function majority(age) {
    if (age >= 18) {
        return 'Over the age of majority'
    }
    else {
        return 'Underage'
    }
}

console.log(majority(19))
console.log(majority(15))
console.log()
