//Temporal dead zone?
//let& const declarations hoisted?
//syntax error, Reference error, type error
//-----------------------------------------------------------------
//'let & const declarations are Hoisted'   they are allocated memory and assigned with undefined but its in a seperate memory where we can't access.

console.log(a); //reference error : cannot access 'a' before initialization
let a = 10;
var b = 100;

//Temporal dead zone: the time between the variable hoisted and till its intialized .

//-----------------------------------------------------------------
//"let" can't be accesed like "window.a" or "this.a" in global space, because its not present in window object
//"let" can't be redeclared if do so Syntax error: identifier a has already been declared.
//"const" can't be redeclared if do so Syntax error: missing initializer in const declaration.
//"const" can't be reassigned if do so Type error: assignment to constant variable.

//reference error : when we can't access the variable