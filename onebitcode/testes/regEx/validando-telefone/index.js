console.clear()

const phoneNumber = '+55 (19) 97104-4160'
let fixedPhoneNumber = phoneNumber.replace(/[-\s]/g, '')
const countryCode = fixedPhoneNumber.match( /(?<=\+)\d{1,3}/ )[0]

console.log(fixedPhoneNumber)
console.log(countryCode)