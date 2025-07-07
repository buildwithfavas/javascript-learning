console.log("Start");

setTimeout(function cb() {
console.log("Callback");
},5000);

console.log("End");

// millions of code here

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + l0000) {
endDate = new Date().getTime();
}

console.log("While expires");

//output:
//Start
//End
//While expires
//Callback

//---------------------------------------
console.log("Start");

setTimeout(function cb1() {
console.log("Callback");   //its printed only after call stack become empty ,still that it will be in callback queue
},0);  //0 time doesn't mean it prints instantly

console.log("End");

//output:
//Start
//End
//Callback


