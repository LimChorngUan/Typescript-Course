/*********************************
 * Class
 *********************************/
class Person {
  // Property member
  name: string; // public by default
  private age: number = 27; // private: only accessible from its containing class
  protected type: string = ''; // protected: private + accessible from the inherited classes

  // Constructor member
  constructor(theName: string, public username: string) {
    // constructor is public too
    this.name = theName;
    this.username = username;
  }

  // Method member
  printAge() {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

// Instantiation
const person = new Person('Amelia', 'HippoLim');
console.log(person);
// cannot access person.type or person.age (because both are protected/private)
person.printAge();
person.setType('cheerful and lovely');


/*********************************
 * Inheritance
 *********************************/
class Maxence extends Person {
  constructor(username: string) {
    super('Maxence', username); // calling the constructor of the super/parent class
    // this.age = 27; => error: age is private and is not accessible outside of it's own containing class
  }
}

const maxence = new Maxence('Charteuse');
maxence.setType('cool guy');
console.log(maxence);


/*********************************
 * Accessors (Getter and Setter)
 *********************************/
class Plant {
  private _species: string = 'Plant';

  get species(): string { // if only getter is provided, this property will be readonly
    return this._species;
  }

  set species(value: string) {
    // species is the property name that can be accessed by outside
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Plant';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "hibiscus"; // species is the property, but behind the scene it will call the setter the set the value "hibiscus" to _species
console.log(plant.species); // getter
plant.species = "ab"
console.log(plant.species)


/*********************************
 * Static Properties and Methods
 *********************************/
class Helper {
  static PI: number = 3.14;
  static calcCircumstances(diameter: number): number {
    return 2 * this.PI * diameter
  }
}

// use static property and method without instantiation
console.log(Helper.PI);
console.log(Helper.calcCircumstances(3));


/*********************************
 * Abstract Classes and Methods
 *********************************/
// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeProjectName(name: string): void // abstract method doesn't have a body. The logic is being implemented once you extend the abstract class

  calcBudget():number {
    return 2 * this.budget;
  }
}

class ITProject extends Project {
  changeProjectName(name: string): void {
    this.projectName = name;
  }
}

const newProject = new ITProject();
console.log(newProject.projectName);
newProject.changeProjectName('IT Project')
console.log(newProject.projectName);
console.log(newProject.calcBudget());