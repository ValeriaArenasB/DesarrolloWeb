import { Observable } from "rxjs";

//creamos un observable
//el observable emite los mensajes
//usamos $ para diferenciar que es un observable

const observable$ = new Observable((subscriber) => {
  subscriber.next("HOLA");
  subscriber.next("MUNDO");
  subscriber.complete();
  subscriber.next("NO SE VE");
});



//creamos un observer
//los observadores reciben los mensajes del observable y tienen funciones que reaccionan a los mensajes
//los observadores son objetos JSON con 3 funciones
//next: recibe el mensaje
//error: recibe un error
//complete: recibe un mensaje de completado

let observer = {
  next: function (mensaje) {
    console.log("Recibido: " + mensaje);
  },
  error: function (error) {
    console.log("Error: " + error);
  },
  complete: function () {
    console.log("Completado");
  },
};

//nos suscribimos al observable
console.log("ANTES");

observable$.subscribe(observer);

console.log("DESPUES");




let observador = {
  next: function (mensaje) {
    console.log("nuevo mensaje: " + mensaje);
  }
};

observable$.subscribe(observador); 


const observableNumeros$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

console.log("suscribiendo");

observableNumeros$.subscribe(observador)

//URL
// 1. CARGAR EL HTML
// 2. PETICION AL BACKEND DE LOS DATOS
// 3. MOSTRAR LOS DATOS EN EL HTML