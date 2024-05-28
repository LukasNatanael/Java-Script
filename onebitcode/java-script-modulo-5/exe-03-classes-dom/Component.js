class Component {
    // element
    constructor(width, height, type='div') {
        // public properties
        this.type = type
        this.width = width
        this.heigth = height
        // this.background = background
        
        // private properties
        this.element = document.createElement(this.type)
        this.element.setAttribute('style', '')
        this.element.setAttribute('class', this.type)

        // initialize component
        this.element.style.width = this.width
        this.element.style.height = this.heigth
        // this.#element.style.background = this.background
    }

    setStyleAll(style) {
        this.element.style = style
    }

    setID(id) {
        this.id = id
        this.element.setAttribute('id', this.id)
    }

    setClass(classe) {
        this.class = classe
        // this.#element.setAttribute('class', this.class)
        this.element.classList.add(this.class)
    }

    setWidth(value) {
        this.element.style.width = value
    }

    setHeight(value) {
        this.element.style.height = value
    }

    setBackground(value) {
        this.element.style.background = value
    }


    getArea() {
        return `${this.element.style.width} X ${this.element.style.height}`  
    }

    getValue() {
        return this.element.value
    }

    build() {
        this.element.style.display = 'none'
        document.body.appendChild( this.element )
    }
    
    render() {
        this.element.style.display = 'block'
    }
}

class Input extends Component {
    constructor(width, height) {
        super(width, height, 'input')

        console.log(this.element)
    }

    setPlaceholder(value) {
        this.element.style.paddingLeft = '5px'
        this.element.setAttribute('placeholder', value)
    }
}

console.clear()
const input = new Input()

input.setStyleAll(`
    border: 1px solid aqua;
    border-radius: 10px;

    display: flex;
    flex-wrap: wrap;
`)

input.setID('name')
input.setPlaceholder('Informe um nome')
input.build()
input.render()
console.log(input)

const div = new Component('100px', '100px')

div.setClass('images')
div.setStyleAll(`
    border-radius: 10px;
    border: 1px solid purple;
`)

div.build()
div.render()

console.log(div)
