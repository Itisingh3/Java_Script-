class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USername ${this.username}`)
    }
    static createId(){
        return `2344`
    }
}
const temp1 = new user("Harry");
// console.log(temp1.createId())    //error because of static keyword...


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iPhone = new teacher("iphone","iphone@gmail.com")
console.log(iPhone.logMe())
// console.log(iPhone.createId())           //error