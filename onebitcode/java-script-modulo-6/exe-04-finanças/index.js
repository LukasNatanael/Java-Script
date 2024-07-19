// é necessário iniciar o banco de dados antes de rodar o código

// renderizando article
function renderArticle(articleData) {
    const article = document.createElement( 'article' )
    article.classList.add('expenses')
    article.id = articleData.id
    
    const itemTitle = document.createElement('input')
    itemTitle.classList.add('item-title')
    // itemTitle.textContent = articleData.title
    itemTitle.value = articleData.title
    itemTitle.disabled = true

    const priceSpan = document.createElement('span')
    // situationSpan.classList.add('priceSpan')

    const moneySimbol = document.createElement('span')
    moneySimbol.textContent = 'R$ '
    moneySimbol.setAttribute('for', `productPrice-${articleData.id}`)
        
    const itemValue = document.createElement('input')
    itemValue.classList.add('item-value')
    itemValue.setAttribute('id', `productPrice-${articleData.id}`)
    // convertendo valor para real
    // itemValue.textContent = `Valor: R$ ${articleData.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    // itemValue.textContent = `Valor: R$ ${articleData.value}`
    itemValue.value = articleData.value
    itemValue.disabled = true

    priceSpan.append( moneySimbol, itemValue )

    const itemSituation = document.createElement('p')
    itemSituation.classList.add('item-situation')
    itemSituation.textContent = `Situação: ${articleData.situation}`
    itemSituation.value = articleData.situation

    const iconsSpan = document.createElement('span')
    iconsSpan.classList.add('icons')
    iconsSpan.id = `icons-${articleData.id}`


    const editButton = document.createElement('button')
    editButton.classList.add('buttons')
    editButton.classList.add('fa-solid')
    editButton.classList.add('fa-pencil')
    editButton.addEventListener( 'click', editProduct )

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('buttons')
    deleteButton.classList.add('fa-solid')
    deleteButton.classList.add('fa-trash-can')
    deleteButton.addEventListener( 'click', deleteProduct )

    iconsSpan.append( editButton, deleteButton )
    
    article.append(itemTitle, priceSpan, itemSituation, iconsSpan)
    document.querySelector('#articles').appendChild(article)

}

// pegando informações do database
async function fetchArticle() {
    const response = await fetch('http://localhost:3000/products').then( data => data.json() )

    response.forEach( renderArticle )
    // response.forEach( (item) => console.log(item) )
}

// função para pesquisar no database
async function dataFind(id) {
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
async function dataPost(articleData) {
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
async function dataDelete(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const deletedArticle = await response.json()

    return deletedArticle
}

function deleteProduct() {
    const currentArticle = event.target.parentElement.parentElement
    currentArticle.style.display = 'none'
    dataDelete(currentArticle.id)
}


function editProduct() {
    const buttons = event.target.parentElement
    const currentArticle = event.target.parentElement.parentElement
    const productTitle = currentArticle.children[0]
    const productPrice = currentArticle.children[1].children[1]
    const productSituation = currentArticle.children[2]


    console.log( `EDIT ${currentArticle.id}` )
    productTitle.disabled = false
    // removendo classe apenas para tirar negrito
    productTitle.classList.remove('item-title')

    productPrice.disabled = false
    // console.log(productPrice)
    // console.log(productSituation)
    console.log(buttons)
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
        
        const savedArticle = dataPost( articleData )
        savedArticle.forEach( fetchArticle )

        form.reset()
        renderArticle(savedArticle)

    }
    catch (error) {
        console.log( error.message )
    }
    

})


// dataFind( '1' ).then( result => console.log( result ) )
