console.clear()
function triangleArea(base, height) {
    const area = (base * height) / 2
    return area 
}

function retangleArea(base, height) {
    const area = (base * height)
    return area
}

function squareArea(side) {
    // const area = retangleArea(side, side)
    const area = side**2
    return area
}

function trapezeArea(largerBase, smallerBase, height) {
    const area = ((largerBase + smallerBase) * height) / 2
    return area
}

function circleArea(ray) {
    const π = 3.14
    const area = π * ray**2
    return area
}


console.log(`Triangle area: ${triangleArea(5, 10)}`)
console.log(`Retangle area: ${retangleArea(5, 10)}`)
console.log(`Square area:   ${squareArea(5)}`)
console.log(`Trapeze area:  ${trapezeArea(5, 3, 10)}`)
console.log(`Circle area:   ${circleArea(10)}`)
