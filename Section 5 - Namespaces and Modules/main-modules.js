"use strict";
// npm install --save systemjs@0.21.5
// <script src="../node_modules/systemjs/dist/system.js"></script>
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./math/circle");
var rect_1 = require("./math/rect");
console.log(circle_1.PI);
console.log(circle_1.calcCircumference(3));
console.log(rect_1.calcRect(2, 4));
