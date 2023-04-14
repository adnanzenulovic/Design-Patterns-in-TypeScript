class Singleton {
  static instance: Singleton;
  public readonly mode = "dark";

  // prevent new with private constructor
  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const example1 = Singleton.getInstance();
const example2 = Singleton.getInstance();

console.log(example1 === example2); // true
