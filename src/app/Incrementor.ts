"use server";
class Incrementor {
  constructor(private _counter = 0) {}

  increment() {
    this._counter += 1;
    return this.counter;
  }
  get counter() {
    return this._counter;
  }
  set counter(value) {
    this._counter = value;
  }
  toJSON() {
    return {
      counter: this._counter,
    };
  }
}

const incrementor = new Incrementor();

export async function getCounter() {
  return incrementor;
}

export async function increment() {
  return incrementor.increment();
}
