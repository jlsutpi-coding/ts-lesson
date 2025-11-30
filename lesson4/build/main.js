console.log("Hello world!");
const arr = ["hie", 2];
// Litreal type
let myName = "John";
// functions
const add = (a, b) => {
    return a + b;
};
// any functions that not return anythings like console.log(); or another,
// we use void
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello");
logMessage(add(2, 2));
// logMessage(add("a", 3));
let substract = function (c, d) {
    return c - d;
};
//interface for function
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiple = (c, d) => c * d;
console.log(multiple(2, 2));
// optional parameter
const addAll = (a, b, c) => {
    //  type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// if c is not given, it will use 2
const sumALl = (a, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(2, 3, 2));
console.log(addAll(2, 3));
console.log(addAll(2, 5));
//  first param default value
const addItems = function (a = 2, b) {
    return a + b;
};
// add undefined to the first parameter in order to use default parameter value
addItems(undefined, 4);
// adding default value will not work with type aliases and interfaces
// rest parameter
const total = function (a, ...nums) {
    return a + nums.reduce((ac, cu) => ac + cu);
};
// it will become nums = [1, 2, 3, 4, 5]; if we didn't add a as prameter in total();
console.log(total(1, 2, 3, 4, 5));
// it will become a = 1, nums = [2, 3, 4, 5]; if we add a as parameter in total();
//  never type
const createError = (errMessage) => {
    throw new Error(errMessage);
};
// function is infinite loop it will return => never in type
const infinte = () => {
    let i = 1;
    while (true) {
        i++;
        // but if we brake it will return the normal => void
        // if (i > 100) {
        //   break;
        // }
    }
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return value;
    //  use of custom type guard function
    if (isNumber(value))
        return "string";
    // use of never type
    return createError("This should never happen");
    // return "string";
};
// custom type guard function
const isNumber = function (value) {
    return typeof value === "number" ? true : false;
};
export {};
//# sourceMappingURL=main.js.map