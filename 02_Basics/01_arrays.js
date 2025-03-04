// Shallow copy (call by Reference) and Deep Copy (call by value) 

const myarr=[1,2,3,4,5]
const Str= ["one", "two"]
const myarr2=new Array(1,2,3,4);


// array methods
// myarr.push(6);     //add element in the last
// myarr.pop();        // pushed element will be pop

// myarr.unshift(0);     //shift the value to the right and then push a new element in the start.
// myarr.shift()        //delete the added element in the start.
console.log(myarr);
// console.log(myarr.includes(3));   // check whether element is present in array or not



// only type are changed and array will be same.
const newarr= myarr.join()
// console.log(myarr);
// console.log(typeof myarr);
// console.log(newarr);
// console.log(typeof newarr)




// slice and splice
// slice only pick the elements and does not change the original array.
// splice pick the element and then remove the picked elements from the original array.
const myn1= myarr.slice(1,3)
console.log("Original Array ",myarr)
console.log("Sliced array ",myn1);
const myn2=myarr.splice(1,3);
console.log("Original Array ",myarr)
console.log("Spliced array ",myn2);
