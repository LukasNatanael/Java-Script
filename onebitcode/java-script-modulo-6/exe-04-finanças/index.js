import { dataPost, fetchArticles } from './database_functions.js'
import { deleteProduct, editProduct, saveProduct } from './product_functions.js'

// é necessário iniciar o banco de dados antes de rodar o código
let debts = [ [], [] ]
// renderizando article

export function renderArticle(articleData) {

    const totalDebts = document.querySelector('#total-debts')
    const openDebts = document.querySelector('#open-debts')

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

    debts[0].push(
        parseFloat(String(articleData.value).replace('.', '').replace(',', '.'))
    )

    if (articleData.situation === 'Pago') {
        situation.classList.add('paid-out')
    }
    else {
        situation.classList.add('pending')
        debts[1].push(
            parseFloat(String(articleData.value).replace('.', '').replace(',', '.'))
        )
    }

    const total          = debts[0].reduce( (num, total) => num += total )
    const openTotalDebts = debts[1].reduce( (num, total) => num += total )

    totalDebts.textContent = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    openDebts.textContent = openTotalDebts.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

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
    
    editButton.addEventListener( 'click', editProduct )

    const saveButton = document.createElement('i')
    saveButton.classList.add('buttons')
    saveButton.classList.add('fa-solid')
    saveButton.classList.add('fa-floppy-disk')
    saveButton.addEventListener('click', saveProduct)

    saveButton.style.display = 'none'

    icons.append( deleteButton, editButton, saveButton )

    divImage.append( image, icons )

    expensesArticle.append( infoSpan, divImage )
    document.querySelector('#articles').appendChild(expensesArticle)

}

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
