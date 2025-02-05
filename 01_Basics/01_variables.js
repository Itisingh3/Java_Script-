const accountId = 144553; //can't change or assigned

// don't use var because it creates a problem of block scope i.e you can change the value of var iutside the scope also.
// Generally use let keyword to intialze an identifier.
let accountEmail = "itisingh@google.com";
var accountPassword = "password123";

// Javascript can also create a memory for those identifier which hoav not any kind of datatype. But this a very bad practice.
accountCity = "Varanasi";

// By default value is undefined
let accountStates;



console.table([accountId, accountEmail, accountPassword , accountCity, accountStates]);