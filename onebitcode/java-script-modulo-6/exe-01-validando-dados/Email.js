class Email {
    constructor( email ) {
        try {
            this.prefix = email.match(/.{2,}(?=\@)/)[0]
            this.server = email.match(/(?<=\@).{2,}(?=\.)/)[0]
            this.domain = email.match(/(?<=\.).{2,}/)[0]
            this.email  = email.match(/[a-zA-z0-9]+@[a-zA-Z0-9].+[a-z-A-Z-0-9]+/)[0]
        }
        catch ( error ) {
            if (!this.email === '') {
                return new Error('Please enter a email address')
            }
            else if (!this.prefix) {
                return new Error('Prefix must be at least two character')
            }
            else if (!this.server) {
                return new Error('Server must be at least two character')
            }
            else if (!this.domain) {
                return new Error('Domain must be at least two character')
            }
        }

    }
}

export default Email