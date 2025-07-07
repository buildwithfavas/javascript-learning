//js is synchronus , single threaded language , it won't wait for anything its just print what in call stack

//Importance of Callbacks:
//asynchronus program done by callback function

//Issues with Callbacks:

//1. Callback Hel l
const cart = ["shoes", "pants", "kurtha"];

api.createOrder(cart,function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})
//callback hell (pyramid of doom) nested callbacks
//unreadable,unmaintanable

//2.Inversion of control:
api.createOrder(cart,function () {
    api.proceedToPayment()
})
//giving the control of one code give to other by callback