export {};

/*****************************
 * Interface
 *****************************/
// Define contracts, describe the requirement what properties an object should have

// Interface doesn't get compiled at all, they are just there to check your code during compilation time

interface NamedPerson {
  firstName: string;
  age?: number; // optional argument
  [propName: string]: any; // cases when we don't know the other property name. Square bracket is not an array
  // greet(lastName: string): void // interface method
}

function greet(person: NamedPerson) {
  // the object being passed to this function must have the property firstName
  console.log(`Hello ${person.firstName}`);
}

let person1 = {
  firstName: 'Maxence',
  age: 27
};

let person2 = {
  lastName: 'Lim',
  age: 18
};

greet(person1);
// greet(person2); => error, person2 doesn't have property firstName
// greet({firstName: 'Min', food: 'curry'}) => error, food isn't defined. When passing object straightly into the function, it checks more strictly
greet({ firstName: 'Malte' });
greet({ firstName: 'Kira', age: 3, hobbies: ['cuddle', 'look for food', 'eat'] });


/*****************************
 * Using Interface with Class
 *****************************/
// explicitly enforcing that a class meets a particular contract

interface AnimalContract {
  name: string;
  age: number;
  nbOfLegs?: number;
  cry(sound: string): void;
}

class Animal implements AnimalContract {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  cry(sound: string): void {
    console.log(sound + '!!!');
  }
}

const cat = new Animal('Hello Kitty', 2);
cat.cry('meowww')


/********************************
 * Using Interface with Function
 *******************************/
interface DoubleFunc {
  (value1: number, value2: number): number;
}

let myDoubleFunc: DoubleFunc = function(num1: number, num2: number) {
  return (num1 + num2) * 2;
}

console.log(myDoubleFunc(10, 20));

/********************************
 * Interface Inheritance
 *******************************/
// Interface can also be inherited like class using the extends keyword 