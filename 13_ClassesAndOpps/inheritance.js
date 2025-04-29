class user {
    constructor(username){
        this.username=username
    }
    LogMe(){
        console.log(`USername is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email, password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const temp1= new Teacher("Harry","hogwards@gmail.com","12344")
temp1.addCourse()
const temp2=new Teacher("Hermoine")
temp2.LogMe()
console.log(temp1===temp2);     //false
console.log(temp1 instanceof user);     //true

