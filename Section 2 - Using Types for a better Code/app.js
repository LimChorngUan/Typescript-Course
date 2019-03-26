"use strict";
/***************************************
 * Assign Type explicitly
 ***************************************/
// Basic types: number, string, boolean
var myAge = 27;
var myName = 'Amelia';
var hasPet = false;
// array
var hobbies = ['Coding', 'Reading', 'Sleeping'];
// hobbies.push(2) => gives error because hobbies is an array of string
// hobbies = "Listening to music" => gives error because hobbies is an array not a string
var flexibleArr = ['a', 1, true];
// tuples
// just an array with fixed element and order
var address = ['Hausotterstr', 21];
// address = [21, 'Hausotterstr'] => gives error, the order is important
// address = ['j', 2, 'a'] => gives error, the number of element is important
// enum
// makes number more expressive, encode numbers to user friendly values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // this will get a number of 101
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any (last resort)
var car = 'BMW';
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
function returnMyName() {
    // this function must return a string
    return myName;
    // return myAge => error!
}
console.log(returnMyName());
// void
function sayHello() {
    // this function should not return anything
    console.log('hello');
    // return myName; => error!
}
// argument type
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// console.log(multiply(2, 'Max')); => error!
// function type
var myMultiply;
// myMultiply = sayHello; => error
myMultiply = multiply;
console.log(myMultiply(2, 4));
// object
var userData = {
    name: 'Amelia',
    age: 27
};
var userData1 = {
    name: 'Min',
    age: 28
};
// union type
var myRealAge; // myRealAge can be of type number or string
myRealAge = 27;
myRealAge = '27';
// myRealAge = true; => error
// check types
var finalValue = 20;
if (typeof finalValue === 'number') {
    // type number must be in quotation mark
    console.log('Final value is a number');
}
// never type
// never returns. It's different from void, which returns nothing.
function neverReturns() {
    throw new Error('An error!');
}
// nullable type
// add flag "strictNullChecks" : true in tsconfig.json => check for null
var canBeNull = 12;
canBeNull = null;
var canBeAny = null;
canBeAny = 12;
