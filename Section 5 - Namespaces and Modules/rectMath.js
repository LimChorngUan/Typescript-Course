"use strict";
var MyMath;
(function (MyMath) {
    function calcRect(width, length) {
        return width * length;
    }
    MyMath.calcRect = calcRect;
})(MyMath || (MyMath = {}));
