const num=400;
// console.log(num)


const numm= new Number(100);
// console.log(numm);


console.log(numm.toString);
console.log(numm.toString().length);
console.log(numm.toFixed(2));   //Upto 2 decimal points.


const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));
const anotherNumber = 123.8966;
console.log(anotherNumber.toPrecision(3));


const hundreds= 10000000
console.log(hundreds.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);



// ********************  Maths  ***********************
console.log(Math.PI)
console.log(Math.SQRT2)    // sqrt(2);
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.random());    // range [0,1]
console.log((Math.random()*10) + 1);    // range [1,9] but in decimal  => +1 is to avoid 0
console.log(Math.floor(Math.random()*10) + 1);    // range [1,9]



const min=10
const max=20
console.log(Math.floor(Math.random()* (max-min+1))+min)
