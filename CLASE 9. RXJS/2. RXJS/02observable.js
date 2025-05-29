import { of, Observable, from, range, interval } from "rxjs";

of("hello", "to", "everyone").subscribe((value) => console.log("of: " + value));

from(["hello", "to", "everyone"]).subscribe({
  next: (value) => console.log("from: " + value),
  error: (error) => console.log("from: error"),
  complete: () => console.log("from: complete"),
});

range(0, 5).subscribe((value) => console.log("range: " + value));

function handMade(arreglo) {
  return new Observable((subscriber) => {
    for (let i = 0; i < arreglo.length; i++) {
      subscriber.next(arreglo[i]);
    }
    subscriber.complete();
  });
}

handMade(["hello", "to", "everyone"]).subscribe({
  next: (value) => console.log("handMade: " + value),
  error: (error) => console.log("handMade: error"),
  complete: () => console.log("handMade: complete"),
});


interval(1000).subscribe((value) => console.log("interval: " + value));