
// class based syntax using setter and getter.....
class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email=value
    }
    // getter and setter are putted in class simultanously , ypu can't make only one of the 
    //  methods..
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}radha`
    }
    set password(value){
        // output=> RangeError: Maximum call stack size exceeded because constructor and    
        //  setter both are setting the value of password...that's why _password is written to avoid race condition.....
        this._password=value.toUpperCase()
    }
}
const radha = new user("radha@gmail.com","abdjed")
console.log(radha.password)
console.log(radha.email)


