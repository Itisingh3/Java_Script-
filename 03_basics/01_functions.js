// Functions can be  
// 1. assign to variables
// 2. passed as an arguments.
// 3. return as a function
// 4. used in data structures.
// 5. used as property.... 



function add(a,b){
    return a+b
}
console.log(add(3,4))
console.log(add(3+"4"))  //undefined is returned by funtion add

const result= add(3,5)
console.log(result);


// sam is provided as default user name.
function func(user="sam"){
    if(!user){
        console.log("Please enter a valid user name")
        return
    }
    return `${user} just logged in`
}
console.log(func())
console.log(func("Harry"));







// ******************* Shopping cart ***************************
function calculateCartPrice(val1,val2,...num){        //val1=20 and val2= 304 and num=rest of the numbers
    return num
}
console.log(calculateCartPrice(20,304,50,40,6,78))    // it returns an array.




const user={
    username:"Harry",
    price:199
}
// sometimes programmer don't know that which type of key is present in object so in that case this code will create problem.
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)




// passing array into function as an arguments.
const myNewArray=[200,300,400,50]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))


function getmyName(firstname, lastname){
    let fullname= firstname+" "+lastname
    // let fullname= firstname+" "+lastname
    return fullname
}
console.log(("Full name: ",getmyName("Harry","Potter")));
console.log(("Full name: ",getmyName(8,9)));


// normal functions
let sqaure = function(num){
    let ans=num**2;
    return ans;
}
console.log(sqaure(3))


// arrow functions
let sqaure1 = (num)=>{
    let ans=num**2;
    return ans;
}
console.log(sqaure1(3))


// ******************* static scoping and dynamic scoping *************************