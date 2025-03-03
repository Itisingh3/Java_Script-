let value = 3
let negvalue = -value;
console.log(negvalue);

console.log(2**3);   //2 to the power 3 
let str1 = "Hello";
let str2 = " Harry";
let str3 = str1 + str2
console.log(str3);
// These are some guidlines for operations on strings.
console.log("1"+2);
console.log("1"+"2");
console.log("1"+ 2 +2);
// Avoid using these type of codes.
console.log(1+ 2 + "2");



console.log(+true);
console.log(+"");


let num1 , num2, num3;
num1=num2=num3=2+2;
// All variables have 4
console.table([num1, num2, num3]);


// prefix and postfix


// sometimes this type of code does not give correct results. That's why datatype of both should be same.
// console.log("2">1);
// console.log("02">1);

// Not predicatable results
console.log(null>0);
console.log(null==0);
console.log(null>=0);


// Always false
console.log(undefined > 0 );
console.log(undefined == 0 );
console.log(undefined >= 0 );

// === also check data type.
console.log("2" === 2);
