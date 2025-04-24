// compile time error => syntax error (automatically corrected)
// run time error => (we should handle it)

try{
    console.log(x);
}
catch{
    // handle the error
    console.log("x is not defined");
}
finally{
    // run every time
    console.log("this will run every time");
}