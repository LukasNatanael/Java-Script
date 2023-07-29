/* Aula 19 de JS Conversor de Temperaturas */

// input range
let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')

// input number

let numberC = document.querySelector('#numeroC')
let numberF = document.querySelector('#numeroF')
let numberK = document.querySelector('#numeroK')

numberC.value = celsius.value
numberF.value = fahrenheit.value
numberK.value = kelvin.value

/* FORMULAS DE CONVERSAO 
celsius_fahrenheit = (celsius * 9/5) + 32
celsius_kelvin = celsius + 273.15

fahrenheit_celsius = (fahrenheit - 32) * 5/9
fahrenheit_kelvin = (fahrenheit - 32) * 5/9 + 273.15

kelvin_celsius = kelvin - 273.15
kelvin_fahrenheit = (kelvin - 273.15) * 9/5 + 32
*/

// função para atualizar celsius 
function atualizarC() {
    numberC.value = celsius.value
}

// função para atualizar fahrenheit 
function atualizarF() {
    let celsiusToFahrenheit = (celsius.value * 9/5) + 32
    numberF.value = celsiusToFahrenheit.toFixed(2)
}

// função para atualizar kelvin 
function atualizarK() {
    let celsiusToKelvin = parseFloat(celsius.value) + 273.00
    numberK.value = celsiusToKelvin.toFixed(2)
}

// função para zerar os valores 
function zerar() {
    celsius.value = 0
    numberC = celsius.value
    numberF = fahrenheit.value
    numberK = kelvin.value
}