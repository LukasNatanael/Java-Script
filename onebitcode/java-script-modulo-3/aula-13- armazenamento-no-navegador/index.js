document.querySelector('#sessionBtn').addEventListener('click', () => {
    const input = document.querySelector('#session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.querySelector('#readSession').addEventListener('click', () => {
    const info = sessionStorage.getItem('info')
    alert(`A informação armazenada é: ${info}`)
})

document.querySelector('#localBtn').addEventListener('click', () => {
    const input = document.querySelector('#local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.querySelector('#readLocal').addEventListener('click', () => {
    const text = localStorage.getItem('text')
    alert(`A informação armazenada é: ${text}`)
})

document.querySelector('#cookieBtn').addEventListener('click', () => {
    const input = document.querySelector('#cookie')

    // cokkieName = value; expires=UTCSringDate; path=/;
    const cookie = `info=${input.value};`
    const expiration = `expires=${new Date(2024, 4, 24)};`
    const path = `path=/;`

    document.cookie = cookie + expiration + path
    input.value = ''

    console.log(document.cookie)
})

document.querySelector('#cookie2Btn').addEventListener('click', () => {
    const input = document.querySelector('#cookie2')

    // cokkieName = value; expires=UTCSringDate; path=/;
    const cookie = `text=${input.value};`
    const expiration = `expires=${new Date(2024, 8, 24)};`
    const path = `path=/;`

    document.cookie = cookie + expiration + path
    input.value = ''

    console.log(document.cookie)
    // console.log(document.cookie.split(';'))
})