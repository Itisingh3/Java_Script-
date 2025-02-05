// type conversion concept i.e "from one data type to another".

let score1 = "33"
let score2 = "33abc"
let score3 = "Harry"


let num1 = Number(score1);
let num2 = Number(score2);
let num3 = Number(score3);

console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);
console.log(num3);
console.log(typeof num3);


// "33" => Number
// "33abc" =>NaN
// true => 1

let isLoggedIn = "anystring";
// true for nonempty string

let bool = Boolean(isLoggedIn);
console.log(bool);




let somenum = 60;
let stringnum = String(somenum);
console.log(stringnum);
console.log(typeof stringnum);

