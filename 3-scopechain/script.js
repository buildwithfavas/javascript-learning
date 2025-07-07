function a() {
    console.log(b);
}

var b = 10;
a(); //output: 10
//-----------------------------------------------
function a1() {
    c();
    function c() {
        console.log(b1);
    }
}

var b1 = 10;
a1(); //output: 10
//-----------------------------------------------
function a2() {
    var b2 = 10;
    c2();
    function c2() {

    }
}

a2();
console.log(b2); //output: reference error: b is not defined 
//-----------------------------------------------
//When execution context is created in the memory component have the reference its lexical environment of parent.
//scope chain means its scope to its parents in a hirarcy(lexical environment)
function a5() {
    var b5 = 10;
    c5();
    function c5() {
        console.log(b5);
    }
}
a5();