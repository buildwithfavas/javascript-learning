//Callback functions:
//a function passed to another function is called Callback function

function x(y){
    console.log("x");
}

x(function y(){
    console.log("y");
})
//------------------------------------------------
// Js is synchronous and single—threaded language 
// asynchronus program is achieved by callback function
setTimeout(function () { //here the anonymus function is a callback function
    console.log("timer");
},5000);
//------------------------------------------------
// blocking the main thread
// everything is executed in the callstack, if any operation/function takes more time and blocking the call stack 
// thats why asynchronus by call back function helps.
//------------------------------------------------
// Event listeners
document.getElementById("clickMe")
.addEventListener("click",function xyz(){ //callback function
    console.log("Button Clicked");
});
//------------------------------------------------

// Closures with Event Listeners
function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click",function xyz(){ //callback function
    console.log("Button Clicked",++count);
});
}

// its scope is to its lexical environment. 
// the event listener handler having scope to its lexical environment due to callback functions having closures takes memory
// event listeners are heavy.
//so we need to remove or free up event listener once finished Garbage Collected.