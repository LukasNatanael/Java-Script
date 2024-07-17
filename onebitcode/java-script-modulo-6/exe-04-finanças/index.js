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
    // convertendo valor para real
    // itemValue.textContent = `Valor: R$ ${articleData.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    itemValue.textContent = `Valor: R$ ${articleData.value}`

    const itemSituation = document.createElement('p')
    itemSituation.classList.add('item-situation')
    itemSituation.textContent = `Situação: ${articleData.situation}`
    itemSituation.value = articleData.situation
    
    article.append(itemTitle, itemValue, itemSituation)
    document.querySelector('#articles').appendChild(article)

}

// pegando informações do database
async function fetchArticle() {
    const response = await fetch('http://localhost:3000/products').then( data => data.json() )

    response.forEach( renderArticle )
    response.forEach( (item) => console.log(item) )
}

// atualizando site ao carregar página
document.addEventListener( 'DOMContentLoaded', () => {
    fetchArticle()
} )


// adicionando produtos ao database
const form = document.querySelector('form')
form.addEventListener( 'submit', async (event) => {
    event.preventDefault()

    // validando inputs
    const product      = document.querySelector('#product')
    const productError = document.querySelector('#product-error')

    const price      = document.querySelector('#price')
    const priceError = document.querySelector('#price-error')
    const situation  = document.querySelector('input[name="situation"]:checked')
    
    // validando se o imput está vazio
    try {

        if ( product.value.length <= 0 ) {
            productError.classList.add('error')
            throw new Error('Por favor informe o nome do produto')
        }
        else {
            productError.classList.remove('error')
        }
        
        if ( price.value.length <= 0 ) {
            priceError.classList.add('error')
            throw new Error('Por favor informe o valor do produto')
        }
        else {
            priceError.classList.remove('error')
        }

        const articleData = {
            title: product.value,
            value: price.value,
            situation: situation.value
        }
        
        form.reset()

        console.log( articleData )

        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( articleData )
        })
    
        const savedArticle = await response.json()

        console.log(savedArticle)

        savedArticle.forEach( fetchArticle )
    }
    catch (error) {
        console.log( error.message )
    }
    


})