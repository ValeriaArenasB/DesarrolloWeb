import {take, interval, map, merge, concat} from 'rxjs';

/*
const mergeExample = () => {

    //crear dos observables
    let obs1 = interval(200).pipe(
        take(10),
        map((value) => "obs1: " + value * -2)
    )

    let obs2 = interval(400).pipe(
        take(10),
        map((value) => "obs2: " + value * 10)
    )


    merge(obs1,obs2).subscribe((value) => console.log(value))

}

mergeExample()
*/


//en una red social
//verfiicar si la sesion esta iniciada (PETICION 1)
//si la sesion esta iniciada retorna el is de sesion en JSON -> idsesion
// carfar los daos y mostrarlos (PETICION 2) -> cargarDatos(idsesion)
// = NO USAR MERGE JAJA



const concatExample = () => {
  let obs1 = interval(200).pipe(
    take(10),
    map((value) => "obs1: " + value * -2)
  );

  let obs2 = interval(400).pipe(
    take(10),
    map((value) => "obs2: " + value * 10)
  );

  concat(obs1, obs2).subscribe((value) => console.log(value));
};

concatExample();