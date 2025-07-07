//Block:
{
    //Compound statement
}

//we can use block in a place where js expects only one statement.
//example:
if (true) console.log("single statement");

if (true) {
    var a = 10;
    console.log(a);
}
//----------------------------------
//Block scope:
//let and const have block scope
{
    var a12 = 10;
    let b12 = 20;
    const c12 = 30;
}
console.log(a12); // 10
console.log(b12); // refernce error b12 is not defined
console.log(c12); // refernce error c12 is not defined
//----------------------------------
//Shadowing:
var a11 = 1000;
{
    var a11 = 10;
    let b11 = 20;
    const c11 = 30;
    console.log(a11); // 10
    console.log(b11); // 20
    console.log(c11); // 30
}
console.log(a11); // 10
//----------------------------------
let b111 = 1111;  //let and const same way scope.
{
    var a111 = 10;
    let b111 = 2222;
    const c111 = 30;
    console.log(a111); // 10
    console.log(b111); // 222 //Shadowing
    console.log(c111); // 30
}
console.log(b111); // 1111
//----------------------------------


