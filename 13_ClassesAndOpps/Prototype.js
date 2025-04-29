// let myName = "Krishna    "
// console.log(myName.truelength)

const { truncate } = require("fs")
const { object } = require("webidl-conversions")


let myHeros = ["Virat Kohli","Hanuman Ji","krishna"]
let heroPower={
    virat:"Bat",
    Hanuman:"ace",
    krishna:"Flute",
    getKrishnaPower:function(){
        console.log(`Krishna Power is ${this.krishna}`)
    }
}

// top level heirarchy has been used to inject the function in all the objects i.e array, function, strings etc....
Object.prototype.god=function(){
    // console.log(`God is present in all objects`)
}
heroPower.god()
myHeros.god()



// *****Inheritance******
const user={
    name:"Krishna",
    email:"Krishna@gmail.com"
}
const teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    // teachingSupport and TASupport linked
    __proto__:teachingSupport
}
// teacher access the prototype of user
teacher.__proto__ = user
// modern syntax to access the prototype of user.
Object.setPrototypeOf(teachingSupport,teacher)



// without trim function we are printing the actual length of strings
let myName = "Krishna    "
console.log(myName.truelength)
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`This string is: ${this.trim().length}`)
}
// 
myName.truelength()
"Hanuman Ji   ".truelength()