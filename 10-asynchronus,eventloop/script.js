//Whenever you run a JavaScript program a global context created and pushed inside call stack 
//call stack is inside js engine its inside browser have power of communicating to the external world done by web APIs
//------------------------------------------------------
//Web APIs: (inside global object: window)
//setTimeout()
//DOM Apis
//fetch()
//localstorage

//console
//location
//------------------------------------------------------
//Example 1:   //behind the scene
//Global execution context pushed to call stack then
console.log("Start");       //(order-1)(call web api console to log to console

setTimeout(function cb() {  //(order-2)registers a callback and starts a timer
    console.log("Callback");    //(order-6)call web api console to log to console
}, 5000);

console.log("End");         //(order-3)call web api console to log to console

//(order-4)when timer has finished : call back function put inside a callback queue
//(order-5)event loop checks the callback and pushes callback function to call stack, event loop acts as a gate keeper
//------------------------------------------------------
//Example 2:   //behind the scene
//Global execution context pushed to call stack then
console.log("Start");                         //(order-1)(call web api console to log to console

document.getEtementById("btn")
    .addEventListener("click", function cb() {//(order-2)addEventListener is a DOM api of browser window object registers an click event, EventListener to be explicitly removed or closing browser until that it wait for event like click.
        console.log("Callback");              //(order-6)call web api console to log to console
    });

console.log("End");                           //(order-3)call web api console to log to console

//(order-4)when timer has finished : call back function put inside a callback queue
//(order-5)event loop checks the callback and pushes callback function to call stack, event loop acts as a gate keeper
//callback queue is for maintain the queue one after other gets executed(like may multiple clicks comes)
//------------------------------------------------------
//Example 3:   //behind the scene
//Global execution context pushed to call stack then
console.log("Start");               //(order-1)(call web api console to log to console

setTimeout(function cbT() {         //(order-2)registers the callback function inside webapi environment and timer started
console.log("CB SetTimeout");
},5000);

fetch("https://api.netftix.com")    //(order-3) fetch is web api for network calls ,registers the callback function inside webapi environment.
.then(function cbF() {
console.log("CB Netflix")
});
//millions of code here
console.log("End");  

//(order-4)micro task queue has higher priority executed first, cbF comes to micro task queue
//(order-5)when timer has finished : call back function cbT put inside a callback queue
//(order-6)Event loop checks and schedule the task once callstack is empty the task from microtask queue is pushed to call stack and once microtask queue is finished callback queue tasks put to call stack
//------------------------------------------------------
//Promises ,Mutation observer goes inside microtask queue
//all else like setTimeout(),DOM Apis goes to callback queue
//Starvation: of call back queue happens when its wait for a long time due to microtask queue