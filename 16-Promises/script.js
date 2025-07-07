//Promises:
//A Promise is an Object representing the eventual completion or failure of an asynchronous operation.
//promise is a place holder which will be later filled with a value
//or a container for a future value.

//in callback we are passing one callback function to another function
//in promise we are attaching one callback function to another function (control of program will be with us)
//----------------------------------------------------------
//call back:
const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function (orderld) { //passing function (giving whole control)
    proceedToPayment(orderId);
});
//----------------------------------------------------------
//Promise:
const promise = createOrder(cart);

promise.then(function (orderld) {  //attaching function (call only once)
    proceedToPaynent(orderId);
});
//----------------------------------------------------------
//Deep dive to Promise:
const GITHUB_API = "https://api.github.com/users/buildwithfavas";
const user = fetch(GITHUB_API);   // fetch returns a promise object
console.log(user);

user.then(function (data) {
    console.log(data);
});

//In developer console it returns:
// user: (<pending>))
// [Prototype]: Promise
// [Promisestate]: "fulfilled"     3states (pending, fulfilled, reject)
// [PromiseResult]: undefined

//promise object are immutable.

createorder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentlnfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentlnfo) {
        return updateWalletBalance(paymentInfo);
    });

//or

createorder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentlnfo => showOrderSummary(paymentInfo))
    .then(paymentlnfo => updateWalletBalance(paymentInfo))

