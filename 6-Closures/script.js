// Closure:
// a function bind together its lexical environment to form a closure.
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();  // 7
//-------------------------------------------------
//Example:
function x1() {
    var a1 = 7;
    function y1() {  
        console.log(a1);
    }
    a1 = 100;
    return y1; // it returns a closure along with function
}
var z1 = x1();
console.log(z1); //f y1() {console.log(a1);}
z1(); // 100 <= because reference to a1 is passed
//-------------------------------------------------
// Uses of Closures:
// Module Design Pattern
// Currying
// Functions like once
// memoize
// maintaining state in async world
// setTimeouts
// Iterators
// and many more...


