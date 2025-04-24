// In const => no redeclaration, no manupulation...
const accountId = 144553; //can't change or assigned

// don't use var because it creates a problem of block scope and functional scope i.e you can change the value of var outside the scope also.
// Generally use let keyword to intialze an variable.
// In var you can redeclare the variable..(bad practice in programming)
// In let you cannot redeclare the variable..
let accountEmail = "itisingh@google.com";
var accountPassword = "password123";

// Javascript can also create a memory for those identifier which have not any kind of datatype. But this is very bad practice.
accountCity = "Varanasi";

// By default value is undefined
let accountStates;



console.table([accountId, accountEmail, accountPassword , accountCity, accountStates]);



// Some more concept
let a=10;
a="Harry"
a=true;
a=null
console.log(a)