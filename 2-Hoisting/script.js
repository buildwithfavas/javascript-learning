// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code is executed.
// You can use variables and functions before declaring them, but with certain rules.
//------------------------------------------------------------------
getName();
console.log(x);

var x = 7;

function getName() {
    console.log("Namasthe Javascript");
}

//output: Namasthe Javascript
//        undefined
//------------------------------------------------------------------
getName1();
console.log(y);

function getName1() {
    console.log("Namasthe Javascript");
}

//output: Namasthe Javascript
//        reference error: y is not defined
//------------------------------------------------------------------
console.log(getName2);

function getName2() {
    console.log("Namasthe Javascript");
}

//output: f getName2(){
//          console.log("Namasthe Javascript");
//          }
//------------------------------------------------------------------





