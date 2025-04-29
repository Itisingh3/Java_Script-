class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new User("Harry","hogwards@gmail.com","12345")
console.log(user1.encryptPassword());
console.log(user1.changeUsername());


// behind the scene i.e similar approach to do the above code....
function user(username,email,password){
    this.username=username
        this.email=email
        this.password=password
}
user.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}