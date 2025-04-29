function multipleBy5(num){
    return num*5;
}
multipleBy5.power=2;
console.log(multipleBy5(5));        //25
console.log(multipleBy5.power);     //2
console.log(multipleBy5.prototype)      //{}



function createUSer(username, score){
    this.username=username
    this.score=score
}
createUSer.prototype.increament = function(){
   this.score++
}
createUSer.prototype.print=function(){
    console.log(`score is ${this.score}`)
}
// without new keyword , the compiler will don't know that print function has value to be printed...and this problem will be resolve by new keyword..
const temp1=new createUSer("Books",25)
const temp2=new createUSer("Music",250)
temp1.print()
temp2.print()