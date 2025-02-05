const arr1=["thor", "iron"]
const arr2=["spider","batman"];

// push() merges the array into original array
// arr1.push(arr2);
// console.log(arr1);    //array contain array "array take s another array as data"


// concat return the new array 
// const arr3 = arr1.concat(arr2);
// console.log(arr3)



// you can use spread operator in place of concat operator also.
const arr3=[...arr1,...arr2];
console.log(arr3)



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array =another_array.flat(Infinity)      //flat takes arrgument which is depth i.e how much in depth you can resolve array
console.log(real_another_array)




console.log(Array.isArray("Harry"));
console.log(Array.from("Harry"));    //convert it into the array
console.log(Array.from({name: "Harry"}))     //can't convert directly into the array.


let a=1;
let b=2
let c=3;
console.log(Array.of(a,b,c))

