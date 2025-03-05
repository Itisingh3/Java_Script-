// primitive
//  7 Types : stirng , Number , Boolean, null ,  undefined, symbol, Bigint


// it is unique even when you provide same strings.
const id1 = Symbol('123');
const id2 = Symbol('123');
console.log(id1 === id2);



// Refernce Types : Non primitive types
// Array, objects, functions
// Array => []
const arr=["one", "two"];

// object => {}
let myobj={
    name:"Iti",
    age : 23,
}
// console.log(myobj);


// functions => function(){}
let myfunc= function(){
    console.log("Myfunction");
    return 0;
}
console.log(myfunc);    //function insides will be executed.
console.log(myfunc());  //functions return value is printed;

// Return types of variables
/*
null => object
undefined => undefined
array => object
function=> function  (but it is know as function object or object function)
object = > object
symbol => symbol
Number=> number
String => string
*/ 







// ************************ Memories in Javascript ****************************
// Stack (For Primtive) and Heap (For Non Primitive)
// stack memory creates copy and Heap memory creates reference.

