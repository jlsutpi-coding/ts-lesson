console.log("Hello world");

//  simple class in ts
class Coder {
  // create value
  name: string;
  constructor(name: string) {
    // assign it
    this.name = name;
  }
}

class Coder2 {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  // if we add not null assertion we will remove the errors
  secondLang!: string;

  // if we add visibility modifier to the value of parameters
  #age: number;
  constructor(
    public readonly name: string,
    public music: string,
    age: number,
    protected lang: string = "Typescript" // default parameter
  ) {
    this.name = name;
    this.#age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `Hello I'm ${this.#age}`;
  }
}

const Dave = new Coder2("Jl Sut Pi", "rock", 22);
console.log(Dave.getAge(), "get age");
// console.log(Dave.lang);
// console.log(Dave.age);

class WebDev extends Coder2 {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age);
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const NawRam = new WebDev("mac", "Naw ram", 22, "pop");
console.log(NawRam.getLang());

////////////////////////////////////////////////

// implementing an interface to a class

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guitarist("Jimmy page", "guitar");
console.log(page.play("play"));

////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Stave = new Peeps("Stave");
const Amy = new Peeps("Amy");

// you can not  call static variable form the obj it's only in the class
// console.log(Stave.count);

console.log(Peeps.count);
/////////////////////////////////////////////

// getter and setter in typescript

class Band {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    ) {
      this.dataState = value;
    } else {
      throw new Error("params is not a array string");
    }
  }
}

const myBand = new Band();

// how to use set data
myBand.data = ["pop", "rock"];

// how to get data
console.log(myBand.data);

// readding the data
myBand.data = [...myBand.data, "kuniciwa"];
console.log(myBand.data);

// myBand.data = ["van hi", 4];
