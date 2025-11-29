console.log("Hello world");
let myName: string = "Jl Sut Pi";
let isLoading: boolean;
let meaningOfLife: number;
let album: string | number;

myName = "naw ram";
meaningOfLife = 19;
isLoading = true;

album = 12;
album = "hello album";

const sum = (a: number, b: number) => {
  return a + b;
};

// | = union type
let postId: string | number;
let isAcitve: number | string | boolean;

let re: RegExp = /\w+/g;
