//Oops:
//4 pillers:

//1.Abstraction
//2.Encapsulation
//3.Inheritance
//4.Polymorphism

//-----------------------------------------------------------
//2.Encapsulation
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();
//-----------------------------------------------------------
//1.Abstraction
//Simpler Interface
//Reduce the impact of change

//-----------------------------------------------------------
//3.Inheritance
//Html elemrent like textbox,Select,checkbox have common hidden,innerHTML,click(),focus() properties and methods inherited.

//-----------------------------------------------------------
//4.Polymorphism
//many forms

//-----------------------------------------------------------
// BENEFITS OF OOP:

// Encapsulation  : Reduce complexity + increase reusability
// Abstraction    : Reduce complexity + isolate impact of changes
// Inheritance    : Eliminate redundant code
// Polymorphism   : Refactor ugly switch/case statements

//Objects:
// Creating Objects
// Factories and Constructors
// Primitives and Reference Types
// Working with Properties
// Private Properties
// Getters / Setters

const circle = {  //object literal
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("draw");
    }
};

circle.draw(); //output: 

//Factory function: (if we return an object its called factory function)
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);
circle1.draw(); //output: draw

//Constructor function: (this keyword along with new keyword is constructor function)
function Circle(radius) {   //function name starts with Uppercase
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}
const another = new Circle(1); //output: draw //if new keyword was not there this keyword will be global object(window).

//Constructor Property
//when we create 
let x1 = {};
// internally it create a default constructor like let x = new Object();
new String(); // '',"",``
new Boolean(); // true, false
new Number(); //1, 2, 3, ...

//Functions are Objects
function Circle123(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another123 = new Circle123(1);

//output: (write in console of web browser)
// Circle123.name        =>  "Circle123" (function name)
// Circle123.length      =>  1  (number of arguments)
// Circle123.constructor => f Function() { [native code] }

Circle123.call({}, 1);
Circle123.apply({}, [1, 2, 3]);

const circle222 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
      console.log('draw');
    }
    `);

const circle333 = new Circle222(1);

//Values types(primitive) vs reference type
//Value type: Number, String, Boolean, Symbol, undefined, null
//Reference type: Object, Function, Array

let x = 10;
let y = x;
x = 20;

console.log(x); //20
console.log(y); //10


let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // value will be 11

//Adding or removing properties:

function Circle11(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circleTest = new Circle11(10);
circleTest.location = { X: 1 };
const propertyName = 'center location';
circleTest[propertyName] = { X: 1 };
delete circleTest['location'];

//Enumerating Properties
for (let key in circleTest) {
    if (typeof circleTest[key] !== 'function')
        console.log(key, circleTest[key]);
}

const keys = Object.keys(circleTest);
console.log(keys);

if ('radius' in circle)
    console.log('Circle has a radius.');

 










