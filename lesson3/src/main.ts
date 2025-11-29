console.log("hello world");

let stringArr: string[] = ["apple", "orange", "banana"];
let mixData: (string | number | boolean)[] = ["Happy", 1232, true];

mixData[0] = 1999;

let test = [];

let bands: string[] = [];
// bands[1] = 1222;

// tuple

let myObj: object;
myObj = [];
myObj = bands;

const exampleObj = {
  id: 1,
  name: "Obito Uchiha",
  age: 22,
};
exampleObj.id = 2;

interface PersonObj {
  id: number;
  name?: string;
  // ? optional
  ph?: number;
  album: (string | number)[];
}

let person1: PersonObj = {
  id: 1,
  name: "sut pi",
  album: ["hello", 6],
};

const meetPerson = (person: PersonObj) => {
  if (person.name) {
    return `Hello ${person.name.toUpperCase()}`;
  }
  return "Hello";
};
console.log(meetPerson(person1));

//  Enums
// "Unlike most Typescript features,Enums are not a type-level addition to JavaScript but something added to the language and runtime"

enum Grade {
  U = 1,
  D,
  C,
  A,
  B,
}

console.log(Grade.B);
