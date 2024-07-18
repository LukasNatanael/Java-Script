console.clear()

async function generateID() {
    const products = await fetch('http://localhost:3000/products').then( response => response.json() )

    let lastID = parseInt(products[products.length -1].id)
    products.forEach( (item) => console.log(item) )
    
    return lastID ++
}

async function fetchProducts() {
    const products = await fetch('http://localhost:3000/products').then( response => response.json() )
} 

// console.log( generateID() )

const productData = {
    id:        generateID(),
    title:     'QCY HT05',
    price:     279.90,
    situation: 'Pago'
}

async function post() {

    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( productData )
    })
    
    const savedArticle = await response.json()
    
    console.log(savedArticle)
    
}

// post()


// fetchProducts()