//Higher order functions: a function takes a function as argument or return function from it called Higher order functions
function x() {   //here x is a callback function
    console.log("Namaste");
};

function y(x) {  //y is a higher order function as it takes a function as argument
    x();
};

//-----------------------------------------------------
//Functinal programming : reusability, modularity
const radius = [1, 2, 3, 4];

const area = function (radius) {
    return Math.PI * radius * radius
};

const cicumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

Array.prototype.calculate = function (logic) {  // Polyfill // piece of code (usually JavaScript) that adds missing functionality to older browsers so they can support features that are built into newer JavaScript specifications.
    const output = [];
    for (let i = 0; i < this.length; i++) {  //this keyword will point out to the array
        output.push(logic(arr[i]));
    }
    return output;
};

console.log(radius.calculate(area));  // can make like this

// console.log(calculate(radius, area));
console.log(calculate(radius, cicumference));
console.log(calculate(radius, diameter));
