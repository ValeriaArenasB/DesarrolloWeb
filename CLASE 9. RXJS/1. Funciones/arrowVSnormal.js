class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }

    
    printName() {
        function extendName() {
            console.log(this.nombre + ' the animal')
        }
        extendName()
    }



    printNameArrow = () => {
        const extendName = () => {
            console.log(this.nombre + ' the arrow')
        }
        extendName()
    }



}


let animal = new Animal('Elephant')
// no funciona porque this no hace referencia a la clase
// animal.printName()
animal.printNameArrow()