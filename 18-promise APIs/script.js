//Promise APIs:
//4 types important:
//1.Promise.all()
//2.Promise.allSettled()
//3.Promise.race()
//4.Promise.any()
//-----------------------------------------------
//1.Promise.all(p1, p2, p3)
//       time : 3s, 1s, 2s   

//Make 3 parallel api calls & gets the result
//if all promises success then it will give an array with all result (and time will be the maximum of time in that promises here its 3s)
//ie, it will wait all of them to finish

//if anyone gets rejected:   (Fail Fast)
//as soon as any one rejected it throws error (for example: p2 fails after 1s the promise.all() throw error, it dont wait for p1 or p2)
//-----------------------------------------------
//2.Promise.allSettled(p1, p2, p3)
//             time:   3s, 1s, 2s   

//Make 3 parallel api calls & gets the result
//if all promises success then it will give an array with all result (and time will be the maximum of time in that promises here its 3s)
//ie, it will wait all of them to finish

//if anyone gets rejected:
//it will give an array with all result eg:[val1, err2, val3] (and time will be the maximum of time in that promises here its 3s)
//-----------------------------------------------
//3.Promise.race(p1, p2, p3)
//       time:   3s, 1s, 2s

//it will give the value of the first settled promise. (here in example p2 value val2 will be returned)
//if first setteled promise fails error will be thrown.
//ie, it will return the result of first setteled promise.
//-----------------------------------------------
//4.Promise.all(p1, p2, p3)
//       time : 3s, 1s, 2s

//seeking for the first success (if any gets rejected it wait for the successfull)
//if everthing fails return result will be aggregated error [err1,err2,err3]  (list of all errors)

//-----------------------------------------------
//Practical:
//1.Promise.all()
//creating dummy promises for demonstration.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 2000);
});

Promise.all([p1, p2, p3]).then(res => {
    console.log(res);    //output: ['P1 Success', 'P2 Success', 'P3 Success'] after 3 second
})
.catch(err => { console.error(err);});
// try making p2 line "resolve("P2 Success")" to "reject("P2 Fail")"  it will throw error after 1 second
// try making p3 line "resolve("P3 Success")" to "reject("P3 Fail")"  it will throw error after 2 second
 
//-----------------------------------------------
//2.Promise.allSettled()
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P4 Success"), 3000);
});

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P5 Failed"), 1000);
});

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P6 Success"), 2000);
});

Promise.allSettled([p4, p5, p6]).then(res => {
    console.log(res);    //output: ['P4 Success', 'P5 Failed', 'P6 Success']
})
.catch(err => { console.error(err);});

//-----------------------------------------------
//3.Promise.race()
const p7 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P7 Success"), 3000);
});

const p8 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P8 Success"), 5000);
});

const p9 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P9 Failed"), 2000);
});

Promise.race([p7, p8, p9]).then(res => {
    console.log(res);    //output: P9 Failed
})
.catch(err => { console.error(err);});

//-----------------------------------------------
//4.Promise.any()
const p10 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P10 Success"), 3000);
});

const p11 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P11 Success"), 5000);
});

const p12 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P12 Failed"), 2000);
});

Promise.race([p10, p11, p12]).then(res => {
    console.log(res);    //output: P10 Success
})
.catch(err => { 
    console.error(err);
    console.log(err.errors);
});
//if all fails then it will give aggrigate error: All promises where rejected

//-----------------------------------------------
//settled means got the result, it can be (resolve or success or fulfilled) or (reject or failure or rejected)