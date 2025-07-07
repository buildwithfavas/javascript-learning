//Promise:
// Creating a Promise
// Error Handling  by then and catch
//---------------------------------------------------------
// Promise Chaning:
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function (err) {       //catch only concern about error in top of the chain, if catch has worked still the bottom ".then" will be working.
        console.log(err.message);
    });

//Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successfull");
    })
}

function validateCart(cart) {
    return true;  //try with true and false to see output
}





