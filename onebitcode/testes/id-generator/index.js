console.clear()

async function fetchProducts() {
    const products = await fetch('http://localhost:3000/products').then( response => response.json() )
} 

// console.log( generateID() )

const productData = {
    title:     'QCY HT05',
    price:     279.90,
    situation: 'Pago'
}

async function post(productData) {

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

async function put(id, { title, price, situation }) {
    const productData = {
        title,
        price,
        situation
    }
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( productData )
    })
    
    const savedArticle = await response.json()
    
    console.log(savedArticle)
    
}

// post()

const computer = {
    title:     'PC GAMER',
    price:     70000,
    situation: 'Em aberto'
}
const iphone = {
    title:     'Iphone 15 Pro Max',
    price:     70000,
    situation: 'Pago'
}
const samsung = {
    title:     'Samsung Galaxy S23 5G',
    price:     70000,
    situation: 'Pago'
}

put(2, computer)
put(1, samsung)
// fetchProducts()