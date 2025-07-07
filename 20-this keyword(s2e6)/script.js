//"use strict"
//---------------------------------------------------------
// =====this in global space=====

console.log(this); //global object -window(in browser), global(in node.js)
//---------------------------------------------------------
// =====this inside a function=====

function x() {
    //this inside function depends on strict/non strict mode 
    //window in non strict mode and undefined in strict mode.
    console.log(this);
}
x(); // output: undefined
//---------------------------------------------------------
// =====this in strict mode - (this substitution)=====

// value of this is "undefined" but as this substitution occurs in non strict mode to global object ie,to window

// If the value of this keyword is undefined or null
// this keyword wilt be replaced with globalObject
// only in non strict mode
//---------------------------------------------------------
// =====this keyword value depends on how this is called (window)=====

x(); // call without any reference output: undefined
window.x(); // call with reference output: window
//---------------------------------------------------------
// =====this inside a object's method=====

//method : function inside object are called method.

const obj = {
    a: 10,
    x: function () {
        console.log(this); // value of this is object
    }
}

obj.x(); //output: {a: 10, x: ƒ}
//---------------------------------------------------------
// =====call apply bind methods (sharing methods)=====
const student = {
    name: "Akshay",
    printName: function () {
        console.log(this.name);
    }
};

student.printName();

const student2 = {
    name: "Deepika"
};

student.printName.call(student2); // value of this is student2

//---------------------------------------------------------
// =====this inside arrow function=====

const obj2 = {
    a: 10,
    x: () => {
        console.log(this);
    }
};
obj2.x(); //output: window ie, (inside arrow function the this will be its enclosing lexical context)
//---------------------------------------------------------
// =====this inside nested arrow function=====

const obj3 = {
    a: 50,
    x: function () {
        const y = () =>{
            console.log(this);
        }
        y();
    }
};
obj3.x(); //output: {a: 50, x: ƒ} ie, (inside arrow function the this will be its enclosing lexical context)


//---------------------------------------------------------
// =====this inside DOM =====
//this will be reference to the html element
