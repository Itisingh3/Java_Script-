const accountId = 144553; //can't change or assigned

// don't use var because it creates a problem of block scope and functional scope i.e you can change the value of var outside the scope also.
// Generally use let keyword to intialze an variable.
let accountEmail = "itisingh@google.com";
var accountPassword = "password123";

// Javascript can also create a memory for those identifier which have not any kind of datatype. But this is very bad practice.
accountCity = "Varanasi";

// By default value is undefined
let accountStates;



console.table([accountId, accountEmail, accountPassword , accountCity, accountStates]);