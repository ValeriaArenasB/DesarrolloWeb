//clasica
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3));
//PROBLEMA: si se devuelve a declarar la funcion mas adelante todos sus llamados se modifican
// y tambien se puede llamar antes de declarar la funcion

function sumar(a, b) {
    return a - b;
}
console.log(sumar(5, 6));

//SOLUCION

const multiplicar = function (a, b) {
    return a * b;
}

console.log(multiplicar(2, 3));
//ya no se puede redeclarar multiplicar


//funcion como parametro de otra funcion
function operar(a, b, fn) {
    return fn(a, b);
}
console.log(operar(1, 1, sumar)); //que por lo de arriba esta restando
console.log(operar(2, 3, multiplicar));


//funcioneds anonimas: no tienen nombre y se usan una sola vez, cuando van a ser usadas

let resultado = operar(100, 1, function (a, b) {
    return a - b;
});
console.log(resultado);


//arrow funciton

const division = function (a, b) {
    return a / b;
}

const divisionArrow = (a, b) => {
    return a / b;
}
console.log(division(10, 2));
console.log(divisionArrow(10, 2));

const elevarCuadrado = numero => {
    return numero * numero;
}   
console.log(elevarCuadrado(5));

const elevar = (numero, potencia) => {
    return Math.pow(numero, potencia =2);
}
//como el return esta definido, se puede omitir y por default se eleva a la 2
console.log(elevar(2, 3));  
console.log(elevar(4));

//si solo se tiene un parametro se pueden omitir los parentesis
const elevar2 = numero => Math.pow(numero, 2);
console.log(elevar2(5));


