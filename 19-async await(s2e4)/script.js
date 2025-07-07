// What is async?
// What is await?
// How async await works behind the scenes?
// Examples of using async/await
// Error Handling
// Interviews
// Async await vs Promise.then/.catch
//---------------------------------------------------------------------

//async and await combo used to handle promises
// async function always returns a promise
async function getData() {
    return "Namaste"; //Wrap it inside a promise and return
}
const dataPromise = getData();
dataPromise.then((res) => console.log(res)); //output: Namaste
// you returned any value it will wrap it inside a promise and it will return it
//-----------------------------------------------------------------------

// async basically is a keyword that is used to create async functions

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

// always returns a promise
async function getData() {
    return p;
}
const dataPromise2 = getData();
dataPromise2.then((res) => console.log(res)); //output: Promise Resolved Value!!
//-----------------------------------------------------------------------

// async and await is used to handle promises
const p2 = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

// await can only be used inside an async function
async function handlePromise() {
    const val = await p2;
    console.log(val);   //output: Promise Resolved Value!!
}
handlePromise();

// await is a keyword that can only be used inside an async function
// await keyword in front of a promise resolves the promise
//-----------------------------------------------------------------------

// Diving Deep into async/await

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

function getData2() {
    // JS engine will not wait for promise to be resolved(it will be registered and move to next)
    p3.then((res) => console.log(res));
    console.log("Namaste JavaScript");
}
getData2();

// output:
// Namaste JavaScript (print immediately)
// Promise Resolved Value!! (print after 10 seconds)
//-----------------------------------------------------------------------

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

async function handlePromise2() {
    // JS Engine waits for promise to resolve.
    const val = await p4;
    console.log("Namaste JavaScript");
    console.log(val);
}
handlePromise2();

// output: (both will be printed after 10 seconds)
// Namaste JavaScript
// Promise Resolved Value!!
//-----------------------------------------------------------------------

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

async function handlePromise3() {
    console.log("Hello World!!");
    // JS Engine waits for promise to resolve.
    const val = await p5;
    console.log("Namaste JavaScript");
    console.log(val);
}
handlePromise3();

// output:
// Hello World!! (prints immediately)
//(after 10 seconds both gets printed):
// Namaste JavaScript 
// Promise Resolved Value!!
//-----------------------------------------------------------------------

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

async function handlePromise4() {
    console.log("Hello World!!");
    // JS Engine waits for promise to resolve.
    const val1 = await p6;
    console.log("Namaste JavaScript 1");
    console.log(val1);

    const val2 = await p6;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}
handlePromise4();
// output:
// Hello World!! (prints immediately)
//(after 10 seconds all gets printed):
// Namaste JavaScript 1
// Promise Resolved Value!!
// Namaste JavaScript 2
// Promise Resolved Value!!
//-----------------------------------------------------------------------

const p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

const p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);
});

async function handlePromise5() {
    console.log("Hello World!!");
    // JS Engine waits for promise to resolve.
    const val1 = await p7;
    console.log("Namaste JavaScript 1");
    console.log(val1);

    const val2 = await p8;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}
handlePromise5();
// output:
// Hello World!! (prints immediately)
//(after 10 seconds all gets printed):
// Namaste JavaScript 1
// Promise Resolved Value!!
// Namaste JavaScript 2
// Promise Resolved Value!!
//-----------------------------------------------------------------------

const p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);
});

const p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

async function handlePromise6() {
    console.log("Hello World!!");
    // JS Engine waits for promise to resolve.
    const val1 = await p9;  //waits here(but call stack not blocked or main thread not blocked)
    console.log("Namaste JavaScript 1");
    console.log(val1);

    const val2 = await p10;  //waits here(but call stack not blocked or main thread not blocked)
    console.log("Namaste JavaScript 2");
    console.log(val2);
}
handlePromise6();
// output:
// Hello World!! (prints immediately)
//(after 5 seconds this gets printed):
// Namaste JavaScript 1
// Promise Resolved Value!!
//(after 10 seconds this gets printed):
// Namaste JavaScript 2
// Promise Resolved Value!!
//-----------------------------------------------------------------------

//What happens behind the seens:
//When await is there the promise execution will suspend it won't block the main thread (so call stack will be free) or freeze the webpage and once its done it will come back to callstack

//-----------------------------------------------------------------------
//Realworld examples of async/await:
const API_URL = "https://api.github.com/users/buildwithfavas";

async function handlePromise7() {
    const data = await fetch(API_URL);
    //fetch().then(res=>res.json()).then(res=>console.log());
    //fetch returns a promise,fetch not part of js its part of browser
    //fetch is a built-in JavaScript function used to make HTTP requests (like GET, POST) from the browser
    //fetch lets you get data from a URL or send data to a server, returning a Promise that resolves to the response.
    //fetch returns a response object(redable stream) have convert to json create promise gives the result
    const jsonValue = await data.json();
    console.log(jsonValue);
}
handlePromise7();
//-----------------------------------------------------------------------

//Error Handling:
const API_URL1 = "https://invalidurl";

async function handlePromise8() {
    try {
        const data = await fetch(API_URL1);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (err) {
        console.log(err);
    }
}
handlePromise8();

//or old method:

async function handlePromise8() {
    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (err) {
        console.log(err);
    }
}
handlePromise8().catch((err)=>console.log(err));
//-----------------------------------------------------------------------

//Interview tips:
//what is async?
// async is a keyword which is used with function, await can be used only inside async
// function to handle promises and these promises are asynchronous 
// explain it with some examples even dive deep and show them that 
// if there are multiple promises how do async await handles that tell your interviewers that how the program works behind the scenes
//-----------------------------------------------------------------------

//Async/await vs Promise.then/catch:

//async/await is just a syntactic sugar over then and catch
// when we use these async and await behind the scene JavaScript is using its own promise that then promise that catch and all that stuff only
// it is just a syntactical sugar over promise native methods
// in await fetch we don't have to deal with callbacks, Otherwise have to pass a call back and that callback will be executed, so you'll have to do promise chaining for that 
// Here you don't have to do Promise chaining.




