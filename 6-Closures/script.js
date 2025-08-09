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
z1(); // 100  <= because reference to a1 is passed
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

//-------------------------------------------------
// Module Design Pattern
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    value: function () {
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.value());   // 0
counter.increment();
console.log(counter.value());   // 1
counter.decrement();
console.log(counter.value());   // 0

//-------------------------------------------------
// Currying
function add(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(3)); // 8

// Functions like once
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const init = once(() => { console.log('init'); return 42; });
console.log(init()); // 'init' then 42
console.log(init()); // 42 (no 'init' again)

//-------------------------------------------------
// memoize
function memoize(fn) {
  let cache = {}; // object to store results

  return function (...args) {
    let key = JSON.stringify(args); // turn arguments into a key
    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    } else {
      console.log("Calculating result:", key);
      let result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // Calculating result: [2,3] → 5
console.log(memoizedAdd(2, 3)); // Fetching from cache: [2,3] → 5
console.log(memoizedAdd(4, 5)); // Calculating result: [4,5] → 9

//-------------------------------------------------
// maintaining state in async world
function makeRequestMaker() {
  let requestCount = 0; // closed over
  return function fakeRequest(data, cb) {
    requestCount++;
    const id = requestCount;
    setTimeout(() => {
      cb(null, { id, processed: data.toUpperCase() });
      console.log(`Request ${id} done (total asked: ${requestCount})`);
    }, Math.random() * 1000);
  };
}

const send = makeRequestMaker();
send('a', (err, res) => console.log(res));
send('b', (err, res) => console.log(res));

//-------------------------------------------------
// setTimeouts

// WRONG (var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 50); // prints 3,3,3
}

// FIX 1 (let)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 50); // prints 0,1,2
}

// FIX 2 (IIFE capture)
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 50); // prints 0,1,2
  })(i);
}

