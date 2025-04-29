const user={
    _email:'radha@gmail.com',
    _password:"abc",
    // get and set removes the importance of hardcode.....
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        return this._email=value
    }
}

const temp = Object.create(user)
console.log(temp.email);