//What is closure?
// A function along with reference to its outer environment together forms a closure
// in other words you can say closure is a combination of a function and its lexical scope bundle togehther to form closure 

//each and every function in js has the acces to its lexical environment ie, access to variables and functions in the environments of its parents, each and every function has access to them.
//so even if the function executed in other scope not in orginal scope it still remembers its lexical environment where it was orginally present in the code.

//Example:
function outer() {
    var a = 10;
    function inner() {   //this inner function remebers its outer environment(so access to a variable)
        console.log(a);
    }   //this inner function along the scope to its outer lexical scope forms a closure
    return inner;
}
outer()();

//if we put let instead of var its work the same way as closure
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
let a = 100; // no effect on printing as inner() lexical scope parent has a=10; if 25th line is not there its print 100 as closure has access to it if not present there its goes parent to grand parent like that.
var close = outest()("Helloworld");
close();

// Uses of Closures:
// Module Design Pattern
// Currying
// Functions like once
// memoize
// maintaining state in async world
// setTimeouts
// Iterators
// data hiding and encapsulation =>  other part of function dont have access to it it encapsulates data
// example:
function counter() {
    var count = 0;  //its private hidden
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

var counter1 = counter()
counter1(); // 1
counter1(); // 2

var counter2 = counter()
counter2(); // 1
counter2(); // 2

//if you need a decrement counter how do you do? is this good and scalable?
//not good way  => use constructor function <=

function CounterOuter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}
var counter = new CounterOuter(); //its a constructor function use caps starting with new keyword
counter.incrementCounter(); //1
counter.incrementCounter(); //2
counter.decrementCounter(); //1

//Disadvantages of closure:
//Over consumption of memory
//those closure variables are not garbage collected accumulating a lot of memory if we create a lot of closures ,not garbage collected still the program expires.
//Lead to memory leaks
//may freeze the browser

//What is garbage collecter? what its do?
//garbage collecter like a program in the browser or in js engine frees up the unutilised memory

//Whats the relation between garbage collecter and closures?
//if any varaibles used from parent function or from lexical scope its not garbage collected, if variables not used are garbage collected.
function a() {
    var x = 0;   //not garbage collected as its form closure
    var w = 98;  //garbage collected as its unused,in V8 modern engines its smartly garbage collected
    return function b() {
        console.log(x);
    }
}
var y = a();
y();
