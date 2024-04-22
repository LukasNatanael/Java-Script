document.querySelector('#sessionBtn').addEventListener('click', () => {
    const input = document.querySelector('#session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})