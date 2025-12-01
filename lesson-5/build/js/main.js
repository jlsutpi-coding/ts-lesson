console.log("Hello Jl Sut Pi");
//  Type Assertions
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
//  For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
let a = "kyaw kyaw";
// Type assertions with as
let b = a; // assignment to less specific type
b = 3;
let c = a; // more specific type
c = "Hello";
// type assertion with <>
let d = "world";
let e = 12;
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concart");
// Becareful! Ts see no problem here - but a string is return
let myNextVal = addOrConcat(2, 2, "concart");
10;
//  typescript check when it can
// 10 as string;
// double casting or force casting
10;
// The Dom is very useful when it comes to Type assertion
const img = document.querySelector("#img");
//  non null assertion adding ! in the end of the tag or value;
const imgNotNull = document.querySelector("img");
const p = document.getElementById("hi");
export {};
//# sourceMappingURL=main.js.map