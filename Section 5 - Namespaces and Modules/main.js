"use strict";
/*********************************
 * Namespace
 *********************************/
// structure code, seperate logic and avoid naming conflict and polluting global namespace
// Problem: all logic still lives in one single file
// Solution: seperate logic into multiple files: circleMath.ts, rectMath.ts etc., then import them
// namespace MyMath {
//   const PI = 3.14;
//   export function calcCircumference(diameter: number): number {
//     return diameter * PI;
//   }
//   export function calcRect(width: number, length: number): number {
//     return width * length;
//   }
// }
// IMPORT NAMESPACES => /// <refernce path="..."/> => run tsc main.ts --outfile main.js to combine all the files into one file
/// <reference path="circleMath.ts"/> 
/// <reference path="rectMath.ts"/>
var PI = 2.99;
console.log(PI);
console.log(MyMath.calcCircumference(3));
console.log(MyMath.calcRect(2, 5));
// namespace is fine with small projects, for bigger project => modules
