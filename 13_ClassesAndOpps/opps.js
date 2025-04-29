
//  object literals
const user ={
    username: "Krishna",
    logincount: 8,
    signedIn: true,
    getUSerDetails: function(){
        // console.log("Got user details from database");
        console.log(this)
    }
}
console.log(user.username)
console.log(user.getUSerDetails())
console.log(this)  //{}



// constructor => new keyword is used to create new context which is known as constructor...
function User(username, logincount,isLoggedIn){
    this.username=username
    this.isLoggedIn=isLoggedIn
    this.logincount=logincount
    this.greeting=function(){
        console.log(`Welcome ${this.year}`);
    }
    return this
}
// const userOne = User("Krishna", 23,true)
// usertwo will overwirte the values of userOne
// const userTwo = User("Radha", 23,false)


// using new  above problem will be resolve....

const userOne = new User("Krishna", 23,true)
const userTwo = new User("Radha", 23,false)
console.log("Constructor ",this.constructor)
console.log(userOne)
console.log(userTwo)

