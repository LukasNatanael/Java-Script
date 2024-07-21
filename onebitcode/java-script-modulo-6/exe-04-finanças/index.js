// é necessário iniciar o banco de dados antes de rodar o código

// renderizando article
function renderArticle(articleData) {

    const expensesArticle = document.createElement('article')
    expensesArticle.classList.add('expenses')
    expensesArticle.id = articleData.id

    const infoSpan = document.createElement('span')
    infoSpan.classList.add('info')

    const itemTitle = document.createElement('input')
    itemTitle.classList.add('item-title')
    itemTitle.disabled = true

    itemTitle.id = `product-${articleData.id}`
    itemTitle.value = articleData.title

    const priceSpan = document.createElement('span')
    priceSpan.classList.add('price-span')

    const priceLabel = document.createElement('label')
    priceLabel.setAttribute('for', `productPrice-${articleData.id}`)
    priceLabel.textContent = 'R$ '

    const priceInput = document.createElement('input')
    priceInput.id = `productPrice-${articleData.id}`
    priceInput.value = articleData.value
    priceInput.disabled = true


    priceSpan.append( priceLabel, priceInput )

    const situation = document.createElement('p')
    situation.textContent = articleData.situation

    if (articleData.situation === 'Pago') {
        situation.classList.add('paid-out')
    }
    else {
        situation.classList.add('pending')

    }

    infoSpan.append( itemTitle, priceSpan, situation )

    const divImage = document.createElement('div')
    divImage.classList.add('image-div')

    const image = document.createElement('img')
    image.classList.add('image')
    image.src = articleData.image
    image.alt = articleData.title

    const icons = document.createElement('span')
    icons.classList.add('icons')

    const deleteButton = document.createElement('i')
    deleteButton.classList.add('buttons')
    deleteButton.classList.add('fa-solid')
    deleteButton.classList.add('fa-trash-can')

    deleteButton.addEventListener( 'click', deleteProduct )
    
    const editButton = document.createElement('i')
    editButton.classList.add('buttons')
    editButton.classList.add('fa-solid')
    editButton.classList.add('fa-pencil')

    editButton.addEventListener( 'click', editButton )

    icons.append( deleteButton, editButton )

    divImage.append( image, icons )

    expensesArticle.append( infoSpan, divImage )
    document.querySelector('#articles').appendChild(expensesArticle)

}

// pegando informações do database
async function fetchArticles() {
    const article = await fetch('http://localhost:3000/products').then( data => data.json() )

    article.forEach( renderArticle )
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
    const currentArticle = event.target.parentElement.parentElement.parentElement
    console.log(currentArticle)
    document.querySelector('#articles').removeChild(currentArticle)
    dataDelete(currentArticle.id)
}


function editProduct() {
    const buttons = event.target.parentElement
    const currentArticle = event.target.parentElement.parentElement.parentElement

    const info = currentArticle.children[0].children

    const productTitle = info[0]
    const productPrice = info[1].children[1]
    const productSituation = info[2]


    // console.log( `EDIT ${currentArticle.id}` )

    productTitle.classList.add('enableInput')
    productPrice.classList.add('enableInput')


    if (productTitle.disabled === false) {
        productTitle.disabled = true
        productTitle.classList.add('enableInput')
        productTitle.classList.add('item-title')

        productPrice.disabled = true
        productPrice.classList.add('enableInput')
        
    }
    else {
        productTitle.disabled = false
        productTitle.classList.remove('item-title')
        // productTitle.classList.remove('enableInput')

        productPrice.disabled = false
        // productPrice.classList.remove('enableInput')


    }
    
    // console.log(currentArticle)
    // console.log(productTitle)
    // console.log(productPrice)
    // console.log(productSituation)
    // console.log(buttons)
}


// atualizando site ao carregar página
document.addEventListener( 'DOMContentLoaded', () => {
    fetchArticles()
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
    
    const image      = document.querySelector('#image')

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
            situation: situation.value,
            image: image.value
        }
        
        const savedArticle = await dataPost( articleData )
        form.reset()
        savedArticle.forEach( fetchArticles )

        renderArticle(savedArticle)

    }
    catch (error) {
        console.log( error.message )
    }
    

})


// dataFind( '1' ).then( result => console.log( result ) )
