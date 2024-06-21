//https://onebitcode.notion.site/03-Express-es-Regulares-no-Javascript-1018456326124239a2abba973a087c8d
//definindo uma função construtora
function phoneNumber( phoneNumberString ) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, '' )

    // utilizando regEx
    // (?<=) -> look behind
    this.contryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    
    // (?=) -> look ahead
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]

    this.number = fixedString.match(/(?<=\)).+/)[0]//.replace(/-/g, '')

}

console.clear()
console.log( new phoneNumber( '+55 (19) 99999-1111' ) )
console.log( new phoneNumber( '+233 (22) 987-6543-210' ) )