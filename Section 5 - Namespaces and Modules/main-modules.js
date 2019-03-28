"use strict";
// npm install --save systemjs@0.21.5
// <script src="../node_modules/systemjs/dist/system.js"></script>
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = __importStar(require("./math/circle"));
var rect_1 = require("./math/rect");
console.log(Circle.PI);
console.log(Circle.calcCircumference(3));
console.log(rect_1.calcRect(2, 4));
