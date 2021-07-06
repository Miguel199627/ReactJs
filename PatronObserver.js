class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(notifyingClass) {
    this.observers.push(notifyingClass);
  }

  unsubcribe(notifyingClass) {
    this.observers = this.observers.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }

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

  increment() {
    this.value++;
    this.notifyObservable(this);
  }
}

class NumberExampleSpanish {
  notify(notification) {
    console.log(`El nuevo numero es: ${notification.value}`);
  }
}

class NumberExampleEnglish {
  notify(notification) {
    console.log(`The new number is: ${notification.value}`);
  }
}

let numberExample = new NumberExample();

numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

numberExample.increment();
numberExample.increment();
