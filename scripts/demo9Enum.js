"use strict";
var Color;
(function (Color) {
    Color[Color["Purple"] = 0] = "Purple";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c;
c = Color.Blue;
console.log(c);
