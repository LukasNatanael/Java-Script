export function inline() {
    console.log('Export nomeado inline')
}

// export default pode ser tanto uma função com ou sem nome(anônima)
export default () => {
    console.log('Export default inline')
}