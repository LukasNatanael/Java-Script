console.clear()
function stepTwo() {
    console.log('step 2')
}

console.log('step 1')
stepTwo()
console.log('step 3')
console.log('step 4')

setTimeout(() => {
    console.log('step 5')
}, 1000, 2)

console.log('step 6')