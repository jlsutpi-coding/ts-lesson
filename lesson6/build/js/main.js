console.log("Hello world");
//  simple class in ts
class Coder {
    // create value
    name;
    constructor(name) {
        // assign it
        this.name = name;
    }
}
class Coder2 {
    name;
    music;
    age;
    lang;
    // name: string;
    // music: string;
    // age: number;
    // lang: string;
    // if we add not null assertion we will remove the errors
    secondLang;
    // if we add visibility modifier to the value of parameters
    constructor(name, music, age, lang = "Typescript" // default parameter
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
const Dave = new Coder2("Jl Sut Pi", "rock", 22);
console.log(Dave.getAge());
// console.log(Dave.lang);
// console.log(Dave.age);
class WebDev extends Coder2 {
    computer;
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const NawRam = new WebDev("mac", "Naw ram", 22, "pop");
console.log(NawRam.getLang());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy page", "guitar");
console.log(page.play("play"));
////////////////////////////////////////////////////
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
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
    dataState;
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((element) => typeof element === "string")) {
            this.dataState = value;
        }
        else {
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
export {};
// myBand.data = ["van hi", 4];
//# sourceMappingURL=main.js.map