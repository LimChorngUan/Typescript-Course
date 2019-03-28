"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    // the object being passed to this function must have the property firstName
    console.log("Hello " + person.firstName);
}
var person1 = {
    firstName: 'Maxence',
    age: 27
};
var person2 = {
    lastName: 'Lim',
    age: 18
};
greet(person1);
// greet(person2); => error, person2 doesn't have property firstName
// greet({firstName: 'Min', food: 'curry'}) => error, food isn't defined. When passing object straightly into the function, it checks more strictly
greet({ firstName: 'Malte' });
greet({ firstName: 'Kira', age: 3, hobbies: ['cuddle', 'look for food', 'eat'] });
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.cry = function (sound) {
        console.log(sound + '!!!');
    };
    return Animal;
}());
var cat = new Animal('Hello Kitty', 2);
cat.cry('meowww');
var myDoubleFunc = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log(myDoubleFunc(10, 20));
/********************************
 * Interface Inheritance
 *******************************/
// Interface can also be inherited like class using the extends keyword 
