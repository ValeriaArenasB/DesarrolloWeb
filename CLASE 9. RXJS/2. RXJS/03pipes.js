import { take, interval, map, filter, reduce } from "rxjs";

//pipe: arquitectura en sistemas donde se transforman mis datos
// datos -> pipe -> datos transformados

/*
interval(100)
  .pipe(take(5))
  .subscribe({
    next: (value) => console.log("interval: " + value),
    complete: () => console.log("interval: complete"),
  });
  */


/*
  interval(100)
    .pipe(take(5), map((value) => value * 2))
    .subscribe({
      next: (value) => console.log("interval: " + value),
      complete: () => console.log("interval: complete"),
    });
    */

  interval(100)
    .pipe(
      take(5),
      filter((value) => value % 2 === 0),
      map((value) => value * 2)
    )
    .subscribe({
      next: (value) => console.log("interval: " + value),
      complete: () => console.log("interval: complete"),
    });

    
  interval(100)
    .pipe(
      filter((value) => value % 2 === 0),
      take(5),
      map((value) => value * 2)
    )
    .subscribe({
      next: (value) => console.log("interval: " + value),
      complete: () => console.log("interval: complete"),
    });


    
    interval(100)
      .pipe(
        filter((value) => value % 2 === 0),
        take(5),
        map((value) => value * 2),
        reduce((a,b) => a+b)
      )
      .subscribe({
        next: (value) => console.log("interval: " + value),
        complete: () => console.log("interval: complete"),
      });
    