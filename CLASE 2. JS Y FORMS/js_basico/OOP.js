//OBJETOS

//1. object literals
const estudiante = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  curso: "JavaScript",
  materias: ["HTML", "CSS", "JS"],
};
console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante["apellido"]);

//permitir agregar y eliminar propiedades
estudiante.telefono = "123456789";
delete estudiante.telefono;
console.log(estudiante);

console.log(`El estudiante ${estudiante.nombre} tiene ${estudiante.edad} años`);

//Destructuring para quitar el; `estudiante.`
const { nombre, edad } = estudiante;
console.log(`El estudiante ${nombre} tiene ${edad} años`);

//objetos anidados
const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    ciudad: "Lima",
    pais: "Peru",
  },
  perro: {
    nombre: "Firulais",
    edad: 5,
  },
};

console.log(persona.direccion.ciudad);
persona.edad = 31;
console.log(persona);
//pero no se puede redefinir todo, solo por atributos

const alumno = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
};

alumno.saludar();

function Alumno(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  };
}

const alumno1 = new Alumno("Lila", "Lopez", 30);
alumno1.saludar();

console.log(Object.keys(alumno1)); //keys para el NOMBRE DE VAR de las propiedades

console.log(Object.values(alumno1)); //values para el VALOR de las propiedades

console.log(Object.entries(alumno1)); //entries para el NOMBRE DE VAR y VALOR de las propiedades

//ARRAY METHODS

const estudiantes = [
  { nombre: "Juan", apellido: "Perez", edad: 30 },
  { nombre: "Lila", apellido: "Lopez", edad: 25 },
  { nombre: "Maria", apellido: "Gutierrez", edad: 28 },
];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

let encontrado = meses.includes("Enero");
console.log(encontrado);

encontrado = estudiantes.some((estudiante) => estudiante.edad > 40);
console.log(encontrado);

encontrado = meses.indexOf("Abril");
console.log(encontrado);

encontrado = estudiantes.findIndex((estudiante) => estudiante.edad > 40);
console.log(encontrado);

const total = estudiantes.reduce((acumulador, estudiante) => {
  return acumulador + estudiante.edad;
}, 0);
console.log(total); //las edades de todos sumadas

const mayores = estudiantes.filter((estudiante) => estudiante.edad > 25);
console.log(mayores);

//para "sacar" un valor
let resultado = estudiantes.filter(
  (estudiante) => estudiante.nombre !== "Juan"
);
console.log(resultado);

//para "buscar" un valor
resultado = estudiantes.find((estudiante) => estudiante.nombre === "Juan");
console.log(resultado);

//PROTOTIPOS

//asi el metodo sale como una propiedad del objeto
// aunque tambien sale la propiedad y el constructor, cada vez que se instancia el metodo se crea en un NUEVO espacio de memoria
function Perro(nombre, raza, edad) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  };
}

const perro1 = new Perro("Firulais", "Labrador", 5);
console.log(perro1);
perro1.saludar();

const perro2 = new Perro("Rex", "Pastor Aleman", 3);
console.log(perro2);


// tambien sale el metodo como objeto, pero saludar() ocupa un espacio global al que se accede cada vez que se instancia 
function Gato(nombre, raza, edad) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;
}

Gato.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anos`);
};

const gato1 = new Gato("Garfield", "Persa", 5);
console.log(gato1);
gato1.saludar();



function Gatito (nombre, raza, edad, color) {
    Gato.call(this, nombre, raza, edad);
    this.color = color;
}

const gatito1 = new Gatito("Michi", "Siames", 2, "Blanco");
console.log(gatito1); //no sale el metodo saludar porque no se hereda de Gato

Gatito.prototype = Object.create(Gato.prototype); //hereda atributos Y metodos

const gatito2 = new Gatito("Pepito", "Siames", 2, "Negro");
console.log(gatito2);
gatito2.saludar();







//CLASES desde 2016

class Empleado {
  constructor(nombre, apellido, salario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
  static bienvenido() {
    console.log("Bienvenido");
  }
}

const empleado = new Empleado("Juan", "Perez", 5000);
empleado.saludar();
Empleado.bienvenido();


class Desarrollador extends Empleado {
  constructor(nombre, apellido, salario, lenguaje) {
    super(nombre, apellido, salario);
    this.lenguaje = lenguaje;
  }
  static bienvenido() {
    console.log("Bienvenido Desarrollador");
  }
}

const desarrollador = new Desarrollador("Liria", "alalal", 5000, "JavaScript");
desarrollador.saludar();
Desarrollador.bienvenido();




//Encapsulamiento

class Trabajador {
    #nombre; //atributos privados
    #apellido;
    #salario;
    constructor (nombre, apellido, salario) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#salario = salario;
    }
    saludar() {
        console.log(`Hola, soy ${this.#nombre} ${this.#apellido}`);
    }

    get nombre() { //getters y setters para acceder a los atributos privados
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre =nuevoNombre;
    }
}

const trabajador1 = new Trabajador("Juan", "Perez", 5000);
trabajador1.saludar();

// console.log(trabajador1.nombre); //undefined porque no se puede acceder a las propiedades privadas

trabajador1.nombre = "Liria";
console.log(trabajador1);
console.log(trabajador1.nombre);