console.log("Hola mundo");

function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2));

// se sobre escribe la funcion sumar en ambas ejecuciones
function sumar(a, b) {
  return a - b;
}

console.log(sumar(1, 2));

const restar = function (a, b) {
  return a - b;
};

//arrow function

const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(2, 3));

const dividir = (a, b) => a / b;

console.log(dividir(2, 3));

//sin () cuando solo hay un parametro
const cubo = (a) => a * a * a;

//con () cuando hay 0 o mas de un parametro
const imprimir = () => console.log("Imprimir");



const operacionFinal = (operacion1, operacion2, a, b) => {
  let resultado1 = operacion1(a, b);
  const resultado2 = operacion2(resultado1, b);
  return resultado2;
};

console.log(operacionFinal(sumar, restar, 1, 2));



const operacion3 = (a, b, funcion) => {
    return funcion(a, b)
    }

console.log(operacion3(1, 2, (a, b) => a + b));





