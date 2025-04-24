// Call stack and hosting....



func()
function func(){
    console.log("Inside func()");
}


// compiler assumes that age is intialized and declared....but value is not assigned but you should avoid using these type of code..
console.log(age);
var age=25;

// var can be used in function hosting but const cannot be used .....


// this type of code will create error.....
// temp();
// let temp=function(){ 
//     console.log("Hello")
// }



function func(greet,fullname){
    console.log("Hello ", fullname);
    greet();
}
function greet(){
    console.log("greeting of the day");
}
func(greet,"Harry");