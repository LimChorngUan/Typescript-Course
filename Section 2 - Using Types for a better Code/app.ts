/***************************************
 * Assign Type explicitly
 ***************************************/
// Basic types: number, string, boolean
let myAge: number = 27;
let myName: string = 'Amelia';
let hasPet: boolean = false;

// array
let hobbies: string[] = ['Coding', 'Reading', 'Sleeping'];
// hobbies.push(2) => gives error because hobbies is an array of string
// hobbies = "Listening to music" => gives error because hobbies is an array not a string
let flexibleArr: any[] = ['a', 1, true];

// tuples
// just an array with fixed element and order
let address: [string, number] = ['Hausotterstr', 21];
// address = [21, 'Hausotterstr'] => gives error, the order is important
// address = ['j', 2, 'a'] => gives error, the number of element is important

// enum
// makes number more expressive, encode numbers to user friendly values
enum Color { // creates a new type Color
  Red = 0, // by default it will always start with 0
  Green = 100,
  Blue // this will get a number of 101
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any (last resort)
let car: any = 'BMW';
console.log(car);
car = {
  brand: 'BMW',
  series: 3
};
console.log(car);

/***********************************
 * After everything is compiled into javascript, the "type" gone. (This is normal because javascript is dynamic typed language). The usage of Typescript is to make sure that you're assigning the right thing to the right variable before compiled into js.
 */

// functions
function returnMyName(): string {
  // this function must return a string
  return myName;
  // return myAge => error!
}
console.log(returnMyName());

// void
function sayHello(): void {
  // this function should not return anything
  console.log('hello');
  // return myName; => error!
}

// argument type
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 3));
// console.log(multiply(2, 'Max')); => error!

// function type
let myMultiply: (n1: number, n2: number) => number;
// myMultiply = sayHello; => error
myMultiply = multiply;
console.log(myMultiply(2, 4));

// object
let userData: { name: string; age: number } = {
  name: 'Amelia',
  age: 27
};
// userData = {
//   a: 'hello',
//   b: 1
// } => error, the property name is important

// type alias (customized type)
type reusableType = { name: string; age: number }; // => this is a new type
let userData1: reusableType = {
  name: 'Min',
  age: 28
};

// union type
let myRealAge: number | string; // myRealAge can be of type number or string
myRealAge = 27;
myRealAge = '27';
// myRealAge = true; => error

// check types
let finalValue = 20;
if (typeof finalValue === 'number') {
  // type number must be in quotation mark
  console.log('Final value is a number');
}

// never type
// never returns. It's different from void, which returns nothing.
function neverReturns(): never { // function with never type cannot have a reachable end point
  throw new Error('An error!')
}

// nullable type
// add flag "strictNullChecks" : true in tsconfig.json => check for null
let canBeNull: number | null = 12;
canBeNull = null;
let canBeAny = null;
canBeAny = 12;