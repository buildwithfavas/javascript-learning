//Map:
const arr = [1, 2, 3, 4, 5];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

const outputDouble = arr.map(double);
console.log(outputDouble);

const outputTriple = arr.map(triple);
console.log(outputTriple);

const outputBinary = arr.map((x) => x.toString(2)); //simplified form with arrow function
console.log(outputBinary);
//---------------------------------------
//Filter:

const arr2 = [1, 2, 3, 4, 5];

function isOdd(x) {
    return x % 2;
}

const oddOutput = arr2.filter(isOdd);
console.log(oddOutput);
//------
function isEven(x) {
    return x % 2 === 0;
}

const evenOutput = arr2.filter(isEven);
console.log(evenOutput);
//------
const greaterthan4Output = arr2.filter((x) => x > 4);
console.log(greaterthan4Output);

//---------------------------------------
//Reduce:  //take whole array values and come up with single value from it

const arr3 = [1, 2, 3, 4, 5];

const outputSum = arr3.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(outputSum);
//------
const outputMax = arr3.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(outputMax);

//---------------------------------------
const users = [
    { firstName: "Mohammed", lastName: "favas", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

const outputFullName = users.map(x => x.firstName + " " + x.lastName);
console.log(outputFullName); //output: ['Mohammed favas', 'donald trump', 'elon musk', 'deepika padukone']
//------
const ageFrequency = users.reduce(function (acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(ageFrequency);  //output: {26: 2, 50: 1, 75: 1}
//------
//Function chaining:
const firstNameOfUsersAbove30 = users.filter(x => x.age > 30).map(x => x.firstName);
console.log(firstNameOfUsersAbove30);  //output : ['donald', 'elon']0: "donald"1: "elon"length: 2[[Prototype]]: Array(0)


