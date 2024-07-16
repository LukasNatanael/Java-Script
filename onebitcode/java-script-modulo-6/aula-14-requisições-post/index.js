// criando artigo
function renderArticle(articleData) {
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const title = document.createElement('h3')
    title.classList.add('article-title')
    title.textContent = articleData.title

    const content = document.createElement('div')
    content.classList.add('article-content')
    content.innerHTML = articleData.content
    
    const author = document.createElement('div')
    author.classList.add('article-author')
    author.textContent = articleData.author

    article.append( title, author, content )
    document.querySelector('#articles').appendChild(article)

}

// pegando informações do database
async function fetchArticles() {
    const articles = await fetch('http://localhost:3000/articles').then( response => response.json() )
    articles.forEach(renderArticle)
    articles.forEach( article => console.log(article) )
    
}

// renderizando artigos sempre que o documento for carregado
document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})

// salvando informações no database
const form = document.querySelector('form')

form.addEventListener('submit', async ( event ) => {
    event.preventDefault()

    // criando estrutura do banco de dados
    const articleData = {
        title:   document.querySelector('#title').value,
        author:  document.querySelector('#author').value,
        content: document.querySelector('#content').value,
    }
    
    // localizando database para enviar as informações
    const response = await fetch('http://localhost:3000/articles', {
        // opções para modificações
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // transformando array em json
        body: JSON.stringify(articleData)
    })

    const savedArticle = await response.json()
    form.reset()
    
    renderArticle( savedArticle )
    console.log( savedArticle )
})

