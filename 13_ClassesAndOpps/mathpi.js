// PRoblem: Can you change the value of MAth.Pi (Yes/No)

const { object } = require("webidl-conversions");


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)
/* Output
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/

const temp={
    name:'Krishna',
    isLoggedIn:true,
    love:function(){
        console.log("He loves Radha:")
    }
}
console.log(Object.getOwnPropertyDescriptor(temp,"name"));
/* 
output
{
  value: 'Krishna',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
Object.defineProperty(temp,'name',{
    writable:false,
    // if false, then name will not printed....and also you have to apply enumerable property on each keys...
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(temp,"name"));
/* 
output
{
  value: 'Krishna',
  writable: false,
  enumerable: true,
  configurable: true
}
*/

// error because this object is not itertable ....
for (let [key,value] of Object.entries(temp)){
    if(typeof value !== 'fucntion'){
        console.log(`Key: ${key} => Value: ${value}`);
    }
}
