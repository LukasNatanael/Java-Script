function fatorial(num) {
    let fat = 1
    for(let c = num; c>1; c--) {
        fat *=c
        // console.log(`${num}! = ${fat}`)
    }
    return `${num}! = ${fat}`

}

console.log(fatorial(5))