console.log("hello world");
let stringArr = ["apple", "orange", "banana"];
let mixData = ["Happy", 1232, true];
mixData[0] = 1999;
let test = [];
let bands = [];
// bands[1] = 1222;
// tuple
let myObj;
myObj = [];
myObj = bands;
const exampleObj = {
    id: 1,
    name: "Obito Uchiha",
    age: 22,
};
exampleObj.id = 2;
let person1 = {
    id: 1,
    name: "sut pi",
    album: ["hello", 6],
};
const meetPerson = (person) => {
    if (person.name) {
        return `Hello ${person.name.toUpperCase()}`;
    }
    return "Hello";
};
console.log(meetPerson(person1));
//  Enums
// "Unlike most Typescript features,Enums are not a type-level addition to JavaScript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["A"] = 4] = "A";
    Grade[Grade["B"] = 5] = "B";
})(Grade || (Grade = {}));
console.log(Grade.B);
export {};
//# sourceMappingURL=main.js.map