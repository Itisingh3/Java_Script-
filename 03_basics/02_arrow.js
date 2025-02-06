const user={
    username:"Harry",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username="sam"      //in fuction this is used that's why we can change the current context
user.welcomeMessage() 


// console.log(this)     //op : empty object in terminal but in browser output is current window object 


// this keyword in function points to something
// but you can not use this keyword to point current context in function 
/*
function chai(){
    console.log(this)
}
chai()
*/



// **** another way to declare function ********
/*
const chai=function(){
    let username="hit"
    console.log(this.username)
}
chai()
// this returns undefined
*/




// arrow function
/*
const chai=()=>{
    let username="hit"
    console.log(this)
    console.log(this.username)
}
chai()
*/



// arrow funtion
// 1. way
const addTwo =(a,b)=>{return a+b}
// 2. way
const subTwo=(a,b)=>(a-b)
// 3. way 
const func=()=>({username:"harry"})

