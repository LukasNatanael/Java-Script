function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    console.log(`Usuário: ${username}`)
    console.log(`Senha: ${password}`)
    console.log(`Confirmação da senha: ${passwordConfirmation}`)

    if (password === passwordConfirmation) {
        alert(`Usuário ${username} cadastrado!`)
    }
    else {
        alert(`As senhas não coincidem!`)
    }

}