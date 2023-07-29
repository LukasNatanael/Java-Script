
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_form = document.getElementById('iano')
    var resultado = document.querySelector('div#resultado')

    if (ano_form.value.length == 0 || ano_form.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo_form = document.getElementsByName('sexo')
        var idade = ano - Number(ano_form.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo_form[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 3) {
                // Bebê
                img.setAttribute('src', 'img/bebe-M.jpg')
            }
            else if (idade <= 10) {
                // Criança
                img.setAttribute('src', 'img/criança-M.jpg')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/adolescente-M.jpg')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-M.jpg')
            }
            else {
                // Idoso
                img.setAttribute('src', 'img/idoso-M.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                // Bebê
                img.setAttribute('src', 'img/bebe-F.jpg')
            }
            else if (idade <= 10) {
                // Criança
                img.setAttribute('src', 'img/criança-F.jpg')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/adolescente-F.jpg')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-F.jpg')
            }
            else {
                // Idoso
                img.setAttribute('src', 'img/idoso-F.jpg')
            }
        }
        resultado.style.textAlign = 'center'

        idade == 1 ? resultado.innerHTML = `Detectamos ${genero} com ${idade} ano.` : resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`

        resultado.appendChild(img)
    }

}