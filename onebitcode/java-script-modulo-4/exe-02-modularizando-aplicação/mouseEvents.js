export { themeSwitcher, copyToClipboard, clearInput }

// Verificando teclas que foram CLICADAS
function themeSwitcher() {
    const main = document.querySelector('main')
    const root = document.querySelector(':root') // :root -> do CSS

    if (main.dataset.theme == 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    }
    else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'

    }
}

function copyToClipboard(event) {
    const button = event.currentTarget
    const resultInput = document.querySelector('#result')

    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
        
    }
    else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}

function clearInput() {
    input.value = ''
    input.focus()
}