console.clear()

class phoneNumber {
    constructor(phoneNumberString) {
        const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, '')
        this.coutryCode   = fixedString.match(/(?<=\+)\d{1,3}/)[0]
        this.ddd          = fixedString.match(/(?<=\()\d+(?=\))/)[0]
        this.number       = fixedString.match(/(?<=\)).+/)[0]
    }
}


console.log( new phoneNumber( '+55 (19) 97104-4160' ) )