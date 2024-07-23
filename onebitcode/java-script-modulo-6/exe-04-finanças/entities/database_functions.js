import { renderArticle } from "../index.js"

// pegando informações do database
export async function fetchArticles() {
    const article = await fetch('http://localhost:3000/products').then( data => data.json() )

    article.forEach( renderArticle )
    // response.forEach( (item) => console.log(item) )
}

// função para pesquisar no database
export async function dataFind(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // const foundArticle = await response.json()
    const foundArticle = await response.json()
    return foundArticle
}


// função para salvar no database
export async function dataPost(articleData) {
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( articleData )
    })

    const savedArticle = await response.json()

    return savedArticle
}

// função para deletar do database e da página
export async function dataDelete(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const deletedArticle = await response.json()

    return deletedArticle
}

export async function dataSave(id, { title, value, situation, image }) {
    const productData = {
        title,
        value,
        situation,
        image
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


// atualizando site ao carregar página
document.addEventListener( 'DOMContentLoaded', () => {
    fetchArticles()
} )