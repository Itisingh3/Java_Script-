// immediately invoked function expressions(IIFE)

// To prevent the Global scope or Global pollution or Global variables we use Iife
(function chai(){
    // unnamed iife
    console.log(`DB CONNECTED`)
})();            // semicolon is provided to stop this function execution in case you want to execute another function
// If you won't provide the semicolon the then below funtion will give error.
((name)=>{
    // named iife
    console.log(`${name} Another DB CONNETED`)
})('Harry')
