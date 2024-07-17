// é necessário iniciar o banco de dados antes de rodar o código

// renderizando article
function renderArticle(articleData) {
    const article = document.createElement( 'article' )
    article.classList.add('expenses')
    article.id = `article-${articleData.id}`
    
    const itemTitle = document.createElement('strong')
    itemTitle.classList.add('item-title')
    
    itemTitle.textContent = articleData.title
    
    const itemValue = document.createElement('p')
    itemValue.classList.add('item-value')
    itemValue.textContent = articleData.value
    
    article.append(itemTitle, itemValue)
    document.querySelector('#articles').appendChild(article)

}

// pegando informações do database
async function fetchArticle() {
    const response = await fetch('http://localhost:3000/products').then( data => data.json() )

    response.forEach( renderArticle )
    response.forEach( (item) => console.log(item) )
}

document.addEventListener( 'DOMContentLoaded', () => {
    fetchArticle()
} )

const form = document.querySelector('form')

form.addEventListener( 'submit', (event) => {
    event.preventDefault()

    // validando inputs
    const product      = document.querySelector('#product')
    const productError = document.querySelector('#product-error')

    const price      = document.querySelector('#price')
    const priceError = document.querySelector('#price-error')
    const situation  = document.querySelector('#situation')
    

    if ( product.value.length <= 0 ) {
        productError.classList.add('error')
    }
    else {
        productError.classList.remove('error')
    }
    
    if ( price.value.length <= 0 ) {
        priceError.classList.add('error')
    }
    else {
        priceError.classList.remove('error')
        
    }
    

})