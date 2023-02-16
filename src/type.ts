// string
let str: string;
let red: string = "Red";
let green: string = "green";
let myColor: string = `My color is ${green}.`;
let yourColor: string = "Your color is" + red;

// number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// boolean
let isBoolean: boolean;
let isDone: boolean = false;

//null

let nul: null; // console.log(nul) output undefined 변수가 할당 되기 전에 사용되어서
nul = null; // null를 할당해야함

//array

const fruits: string[] = ["Apple", "Banana", "Cherry"]; // 문자 데이터 배열
const number: number[] = [1, 2, 3, 4, 5]; // 숫자 데이터 배열
const union: (string | number)[] = ["Apple", 1, 2, "Banana", 4, 5]; // 문자/ 숫자 데이터가 섞인 배열

//object

const obj: object = {};
const arr: object = [];
const func: object = function () {};

const userA: {
  name: string;
  age: number;
  isValid: boolean;
} = {
  name: "Heropy",
  age: 20,
  isValid: true,
};

interface User {
  name: string;
  age: number;
  isValid: boolean;
}

const userB: User = {
  name: "Seon-Mi",
  age: 16, // springtime of life lol... just kidding
  isValid: true,
};

const userC: User = {
  name: "Ju-Bee",
  age: 9,
  isValid: false,
};


//function 

const multiply: (x: number, y: number) => number  = function (x, y) {
    return x * y
}
// or
const mul = function (x: number, y: number): number {
    return x * y
}

const m: number = multiply(2, 8)



const hello: () =>  void = function () {
    console.log('Hello TypeScript')
}

//or

const hel = function ():void {
    console.log('Hello TypeScript')
}


const h: void = hello()