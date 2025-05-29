console.log("Hello, world!");
console.error("Error message");
console.warn("Warning message");
console.info("Info message");

//Variables

//no son tipadas
//son dinamicas
let variable = "Hola";
console.log(variable);
variable = 10;
console.log(variable);

//Constantes
const constante = "Constanteee";
console.log(constante);
//constante = "Otra cosa"; //Error

const arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);
arreglo[0] = 100;
console.log(arreglo);

//var vs let
var variable1 = "Variable 1";
let variable2 = "Variable 2";
console.log(variable1);
console.log(variable2);

//no respeta la regla de que la variables muere fuera de unos {}
//let si la tiene. usar let para que respete la regla

let edad = 20;
if (edad > 18) {
  let mensaje = "Eres mayor de edad";
  console.log(mensaje);
}

//switch
let dia = 5;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("No es un dia de la semana");
    break;
}

//Ciclos
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//String
let nombre = "Juan";
let apellido = "Perez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//largo del string
console.log(nombreCompleto.length);

//indice de un substring
console.log(nombreCompleto.indexOf("Perez"));

//si existe la subcadena
console.log(nombreCompleto.includes("Perez"));

let frase = nombreCompleto.concat(" es el nombre completo");
console.log(frase);

//template literals
console.log(`El nombre es ${nombre} y el apellido es ${apellido} `);
//la mejor forma de concatenar strings

//trim
let texto = "    Hola mundo    ";
console.log(texto);
console.log(texto.trim());

//reemplazar
let texto2 = "Hola mundo";
console.log(texto2);
console.log(texto2.replace("mundo", "mundo2"));

//mayusculas y minusculas
let texto3 = "hSAAsssSdDDDd";
console.log(texto3.toUpperCase());
console.log(texto3.toLowerCase());

//substring
let texto4 = "Hola mundo";
console.log(texto4.substring(0, 4));

//split
let texto5 = "Hola mundo";
console.log(texto5.split(" "));

//numeros

let numero = 10;
let decimal = 10.5;
console.log(typeof numero);
console.log(typeof decimal);

//libreria math
console.log(Math.round(decimal));
console.log(Math.floor(decimal));
console.log(Math.ceil(decimal));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(9));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));

//random
console.log(Math.random());
console.log(Math.round(Math.random() * 100 + 1));

console.log(Number.parseInt("10"));
console.log(Number.parseFloat("10.5"));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

//NaN, null y undefined
console.log(Number.parseInt("Hola"));
let indefinida;
console.log(indefinida);
indefinida = null;
console.log(indefinida);

//diferencia entre == y ===
console.log(10 == "10"); //true
console.log(10 === "10"); //false

//arreglos
let arreglo2 = [1, 2, 3, 4, 5];
console.log(arreglo2);
let arreglomixto = [1, "hola", 3, "mundo", true];
console.log(arreglomixto);

//mstrices
let matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(matriz);
console.table(matriz);

//arreglos como listas
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
//agregar algo al final
meses.push("Mayo");
console.log(meses);

//agregar algo al incio
meses.unshift("Mes 0");
console.log(meses);

//eliminar algo del final
meses.pop();
console.log(meses);

//eliminar algo del incio
meses.shift();
console.log(meses);

//eliminar algo por su indice
let algunosMeses = meses.splice(1, 3);
console.log(algunosMeses);

//concat
let pares = [2, 4, 6, 8];
let impares = [1, 3, 5, 7];
let todos = pares.concat(impares);
console.log(todos);

//forma declarativa
let todos2 = [...pares, "ultimo"];
console.log(todos2);

//for each
todos.forEach(function (elemento) {
  console.log(elemento);
});

//map
let arreglo3 = todos.map(function (elemento) {
  return elemento * 2;
});
console.log(arreglo3);

//forof "FOREACH" TRADICIONAL
for (let elemento of todos) {
  console.log(elemento);
}

//forin IMPRIME EL ITERADOR, NO EL VALOR
for (let indice in todos) {
  console.log(todos[indice]);
}
