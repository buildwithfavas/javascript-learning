function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("JavaScript");
}
x();
// output: 
// JavaScript
// 1 (after 3 seconds)
//---------------------------------------------------------
function y() {
    for (var i = 1; i <= 5; i++) {  //closure remembers the reference to i and its var.
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }

    console.log("JavaScript");
}
y();
// output:
// JavaScript
// 6
// 6
// 6
// 6
// 6
//---------------------------------------------------------
function z() {
    for (let i = 1; i <= 5; i++) {  //closure remembers the reference to i and its let so block scope.
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }

    console.log("JavaScript");
}
z();
// output:
// JavaScript
// 1
// 2
// 3
// 4
// 5
//---------------------------------------------------------
//By using var
function z1() {
    for (var i = 1; i <= 5; i++) { 
        function close(num) {           //you passed i into a function (close(num)), and num became a local variable with its own value
            setTimeout(function () {
                console.log(num);
            }, num * 1000);
        }
        close(i);

    }

    console.log("JavaScript");
}
z1();
// output:
// JavaScript
// 1
// 2
// 3
// 4
// 5



