// npm install --save systemjs@0.21.5
// <script src="../node_modules/systemjs/dist/system.js"></script>

import * as Circle from './math/circle';
import { calcRect } from './math/rect';

console.log(Circle.PI);
console.log(Circle.calcCircumference(3));
console.log(calcRect(2, 4));