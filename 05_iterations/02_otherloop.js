// for of loop
//  ["",""]    => strings in array
// [{},{}]     => objects in array


// *********  traversing the array with the help of iterator
const arr=[1,2,3,4]
for (const num of arr){
    // console.log(num)
}



// *********  traversing the string through iterator
const greetings="Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}




// ********  Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India")      //maps contain only distinct elements
// console.log(map)

// traverse the map through iterator and key , value individually point to map key-value pair.
for(const [key,value] of map){
    console.log(key, ':-' , value)
}
// this prints nothing
for(const key in map){
    console.log(key)
}





// **********  traverse the object through the iterator is not applicabe.
const myObject = {
    key1:'abc',
    key2:'def'
}
/*
for(const [key,value] of myObject){
    // console.log(key, ':-' , value)        //this will provide error.
}

// another way to traverse the object
for(const key in myObject){
    // console.log(`${key} is ${myObject[key]}`)      // this provides the error
}
*/





// **********  