"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*********************************
 * Class
 *********************************/
var Person = /** @class */ (function () {
    // Constructor member
    function Person(theName, username) {
        this.username = username;
        this.age = 27; // private: only accessible from its containing class
        this.type = ''; // protected: private + accessible from the inherited classes
        // constructor is public too
        this.name = theName;
        this.username = username;
    }
    // Method member
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
// Instantiation
var person = new Person('Amelia', 'HippoLim');
console.log(person);
// cannot access person.type or person.age (because both are protected/private)
person.printAge();
person.setType('cheerful and lovely');
/*********************************
 * Inheritance
 *********************************/
var Maxence = /** @class */ (function (_super) {
    __extends(Maxence, _super);
    function Maxence(username) {
        return _super.call(this, 'Maxence', username) || this;
        // this.age = 27; => error: age is private and is not accessible outside of it's own containing class
    }
    return Maxence;
}(Person));
var maxence = new Maxence('Charteuse');
maxence.setType('cool guy');
console.log(maxence);
/*********************************
 * Accessors (Getter and Setter)
 *********************************/
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Plant';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            // species is the property name that can be accessed by outside
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Plant';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "hibiscus"; // species is the property, but behind the scene it will call the setter the set the value "hibiscus" to _species
console.log(plant.species); // getter
plant.species = "ab";
console.log(plant.species);
/*********************************
 * Static Properties and Methods
 *********************************/
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calcCircumstances = function (diameter) {
        return 2 * this.PI * diameter;
    };
    Helper.PI = 3.14;
    return Helper;
}());
// use static property and method without instantiation
console.log(Helper.PI);
console.log(Helper.calcCircumstances(3));
/*********************************
 * Abstract Classes and Methods
 *********************************/
// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return 2 * this.budget;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeProjectName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject.projectName);
newProject.changeProjectName('IT Project');
console.log(newProject.projectName);
console.log(newProject.calcBudget());
