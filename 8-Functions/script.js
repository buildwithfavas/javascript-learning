//Function:
// What is an Anonymous Function? a function without name
//What are First Class Functions?
//callback functions?
//higher order functions?
//arrow functions?
//pure functions?
//Function Statement vs.Function Expression vs.Function Declaration?
//-------------------------------------------
a();   // important => Hoisting is possible in Function Statement or Function Declaration
b();   // b will be undefined and cannot be called like b();
xyz(); // error: reference error xyz is not defined ,//it can't be accessed outside.
//-------------------------------------------
// Function Statement/Function Declaration
// a normal function with function keyword and function name with its statements inside.
function a() {   // Hoisting is possible
    console.log("a is called");
}
//-------------------------------------------
// Function Expression
var b = function () {  //function assigned to a variable ,hoisting not possible
    console.log("b is called");
}
//-------------------------------------------
// Anonymus Function
//function () { //function without name ,used where functions used as values

//} // usally used when used as values, cant be written like this show error
//-------------------------------------------
// Named Function Expression
var d = function xyz() {  //function assigned to a variable ,hoisting not possible
    console.log("b is called");
    console.log(xyz); //it can be accessible here inside.
}
//-------------------------------------------
// parameters & arguments
var e = function (param1, param2) {  //parameters
    console.log("something");
}
e(argument1, argument2);     //arguments : given on invoke or calling function
//-------------------------------------------
// First Class Functions/First Class Citizens
//ability to use function as values , we can pass as arguments or returned from functions.
var f = function (param1) {
    return function () { //here returning an Anonymus Function
    }
}

function abc() {

}

f(abc);
//-------------------------------------------
// Arrow functions
var g = () =>{

}
