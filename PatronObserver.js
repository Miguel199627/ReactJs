class Observable {

  constructor() {
    this.observers = [];
  }

  // Agrega un observador al array observers.
  subscribe(notifyingClass) {
    this.observers.push(notifyingClass);
  }

  // Recorre el array observers hasta encontrar el elemento notifyingClass el cual retorna true eliminandolo el observador de el array observers.
  unsubcribe(notifyingClass) {
    this.observers = this.observers.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }

  // Actualiza los observadores con el metodo notify el cual tiene un parametro notificatión o mensaje.
  notifyObservable(notification) {
    this.observers.forEach((observer) => {
      observer.notify(notification);
    });
  }

}

// Clase observada o escuchada por los observadores
class NumberExample extends Observable {

  constructor() {
    super();
    this.value = 0;
  }

  // Modifica value y notifica a los observadores del cambio realizado.
  increment() {
    this.value++;
    this.notifyObservable(this);
  }

}

// Clase observadora
class NumberExampleSpanish {
  // Metodo que se invoca cuando se realizan cambios en increment y muestra en consola el valor de notification.value para idioma español.
  notify(notification) {
    console.log(`El nuevo numero es: ${notification.value}`);
  }
}

// Clase observadora
class NumberExampleEnglish {
  // Metodo que se invoca cuando se realizan cambios en increment y muestra en consola el valor de notification.value para idioma ingles.
  notify(notification) {
    console.log(`The new number is: ${notification.value}`);
  }
}

let numberExample = new NumberExample();

// Se registran los observadores a la clase observada.
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleSpanish());

// Se invoca el metodo increment de la clase observada y hace reaccionar a los observadores 
numberExample.increment();
numberExample.increment();
