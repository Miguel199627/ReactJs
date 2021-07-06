class Observable {
  constructor() {
    this.observers = [];
  }
  // Agrega la notificación al array observers.
  subscribe(notifyingClass) {
    this.observers.push(notifyingClass);
  }
  // Recorre el array observers hasta encontrar el elemento notifyingClass el cual retorna true eliminandolo de este.
  unsubcribe(notifyingClass) {
    this.observers = this.observers.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }
  // Agrega un metodo notify por cada elemento del array observers el cual contiene un mensaje o notificación.
  notifyObservable(notification) {
    this.observers.forEach((observer) => {
      observer.notify(notification);
    });
  }
}

class NumberExample extends Observable {
  constructor() {
    super();
    this.value = 0;
  }
  // Incrementa el valor de value en uno y lo notifica atra vez de notifyObservable mandando la instancia de la clase.
  increment() {
    this.value++;
    this.notifyObservable(this);
  }
}

class NumberExampleSpanish {
  // Clase objervable que escucha los cambios de increment y muestra en consola el valor de notification.value para idioma español.
  notify(notification) {
    console.log(`El nuevo numero es: ${notification.value}`);
  }
}

class NumberExampleEnglish {
  // Clase objervable que escucha los cambios de increment y muestra en consola el valor de notification.value para idioma ingles.
  notify(notification) {
    console.log(`The new number is: ${notification.value}`);
  }
}

let numberExample = new NumberExample();

// Subcribimos ambas clases de escucha, estando preparadas para hacer su trabajo.
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleSpanish());

// Al llamar dos veces increment las clases NumberExampleSpanish y NumberExampleSpanish se invocaran o realizaran su trabajo por dos.
numberExample.increment();
numberExample.increment();

// El resultado es mostrar el numero n cantidad de veces que se invoque increment.
