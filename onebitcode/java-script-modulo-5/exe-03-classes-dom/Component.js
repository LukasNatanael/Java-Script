class Component {
    #type
    #elementStyle = document.createElement('style')
    #element
    constructor( type, width, height, background='white') {
        // public properties
        this.#type = type
        this.width = width
        this.heigth = height
        this.background = background
        
        // private properties
        this.#element      = document.createElement(this.#type)
        // this.#elementStyle = document.createElement('style')
        this.#element.setAttribute('style', '')

        // initialize component
        this.#element.style.width = this.width
        this.#element.style.height = this.heigth
        this.#element.style.background = this.background
    }

    setStyleAll(style) {
        this.#element.style = style
    }

    setID(id) {
        this.id = id
        this.#element.setAttribute('id', this.id)
    }

    setClass(classe) {
        this.class = classe
        this.#element.setAttribute('class', this.class)
    }

    setWidth(value) {
        this.#element.style.width = value
    }

    setHeight(value) {
        this.#element.style.height = value
    }

    setBackground(value) {
        this.#element.style.background = value
    }


    getArea() {
        return `${this.#element.style.width} X ${this.#element.style.height}`  
    }

    getValue() {
        return this.#element.value
    }

    show(yes=true) {
        if (yes) {
            this.#element.style.display = 'block'
        }
        else {
            this.#element.style.display = 'none'
        }
    }

    build() {}

    render() {
        document.body.appendChild( this.#element )
    }
}

console.clear()
const div = new Component('div', '100px', '100px')

div.setStyleAll(`
    height: 100px;
    width: 100px;
    background-color: red;
    border-radius: 10px;
`)

div.render()
