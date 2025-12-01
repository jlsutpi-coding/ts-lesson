console.log("Hello Jl Sut Pi");

type One = string;
type Two = string | number;
type Three = "Hello";

//  Type Assertions

// Sometimes you will have information about the type of a value that TypeScript can’t know about.

//  For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

let a: One = "kyaw kyaw";

// Type assertions with as
let b = a as Two; // assignment to less specific type
b = 3;

let c = a as Three; // more specific type
c = "Hello";

// type assertion with <>
let d = <One>"world";
let e = <number | string>12;

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concart"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concart") as string;
// Becareful! Ts see no problem here - but a string is return
let myNextVal: number = addOrConcat(2, 2, "concart") as number;

10 as number;
//  typescript check when it can
// 10 as string;

// double casting or force casting
10 as unknown as string;

// The Dom is very useful when it comes to Type assertion

const img = document.querySelector("#img") as HTMLImageElement;

//  non null assertion adding ! in the end of the tag or value;
const imgNotNull = document.querySelector("img")!;
const p = <HTMLParagraphElement>document.getElementById("hi");
