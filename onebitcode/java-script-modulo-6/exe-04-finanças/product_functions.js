import { dataDelete, dataSave } from './database_functions.js'

export function deleteProduct() {
    const currentArticle = event.target.parentElement.parentElement.parentElement
    console.log(currentArticle)
    document.querySelector('#articles').removeChild(currentArticle)
    dataDelete(currentArticle.id)
}


export function editProduct() {
    const buttons = event.target.parentElement
    const currentArticle = event.target.parentElement.parentElement.parentElement
    const saveBtn = buttons.children[2]

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
        saveBtn.style.display = 'none'

        productPrice.disabled = true
        productPrice.classList.add('enableInput')
        
    }
    else {
        productTitle.disabled = false
        productTitle.classList.remove('item-title')
        // productTitle.classList.remove('enableInput')

        productPrice.disabled = false
        saveBtn.style.display = 'block'

        // productPrice.classList.remove('enableInput')


    }
    
    // console.log(currentArticle)
    // console.log(productTitle)
    // console.log(productPrice)
    // console.log(productSituation)
}

export function saveProduct() {
    const currentArticle = event.target.parentElement.parentElement.parentElement
    const info = currentArticle.children[0].children

    const productTitle = info[0]
    const productPrice = info[1].children[1]
    const productSituation = info[2]
    const productImage = currentArticle.children[1].children[0].src

    productTitle.classList.add('item-title')

    console.log( 
       {
            id: currentArticle.id,
            title: productTitle.value,
            value: productPrice.value,
            situation: productSituation.textContent,
            image: productImage
        }
    )
    
    dataSave(
        currentArticle.id,{
            title: productTitle.value,
            value: productPrice.value,
            situation: productSituation.textContent,
            image: productImage
        }
    )

    productTitle.disabled = true
    productPrice.disabled = true
    // productSituation
    // productImage
}
