const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
if (userEmail.length === 0) {
    console.log("Array is empty");
}


/* 
falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN, ''
*/


/*
truthy values
"0", 'false', " ", [], {}, function(){}
*/




const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {       // It is checking that is keys are available in object
    console.log("Object is empty");
}




// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 20 ?? 100
// val1 = null ?? null ?? 100
// val1 = null ?? null ?? null
val1 = null ?? undefined ?? 10
console.log(val1);




// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")