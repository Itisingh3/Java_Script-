// singleton object
// const user= new Object()

// nonsingleton object
const user = {}

user.name="abs";
user.age=25;
console.log(Object.keys(user))     //dataype of the returned value is in array.
console.log(Object.values(user));
console.log(Object.entries(user))   //all entries consist in an array.
console.log(user.hasOwnProperty('name'))      //return true or false for the keys present or not.


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Harry",
            lastname:"Potter"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname?.userfullname.firstname)     //?in case somthing is not exist in the objects



const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
// const obj3=Object.assign({},obj1,obj2,obj4);   //{} gives you gurante that object value will combine. Without {} it will also give the same output.
const obj3={...obj1,...obj2};

console.log(obj3)


// array of objects
const users=[
    {
        id:1,
        email:"hello@gmail.com"
    }
    ,
    {
        id:2,
        email:"some@gmail.com"
    }
]



console.log(users[1].email)
