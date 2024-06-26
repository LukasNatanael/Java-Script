module.exports = class Email {
    constructor( email ) {
        try {
            this.prefix = email.match(/.{2,}(?=\@)/)[0]
            this.server = email.match(/(?<=\@).{2,}(?=\.)/)[0]
            this.domain = email.match(/(?<=\.).{2,}/)[0]
            this.email  = email.match(/[a-zA-z0-9]+@[a-zA-Z0-9].+[a-z-A-Z-0-9]+/)[0]
        }
        catch ( error ) {
            if (!this.prefix) {
                console.log('prefix must be at least two character')
            }
            else if (!this.server) {
                console.log('server must be at least two character')
            }
            else if (!this.domain) {
                console.log('domain must be at least two character')
            }
        }
    }
}
