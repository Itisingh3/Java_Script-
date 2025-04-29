function setUSerName(username){
    // ]Complex db calls
    this.username=username
    console.log("Called")
}

function createUser(username,email,password){
    // without .call setUSerNAme is not called
    // with the help of "this" username will be set...
    setUSerName.call(this,username)

    this.email=email
    this.password=password
}
const temp = new createUser("Harry","Hogwards@gmail","123")
console.log(temp)