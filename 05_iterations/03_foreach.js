const coding=["js","ruby","java","python"]
// forEach() calls a function for each Element in an array
// forEach method is not executed for empty elements
// call back function have no name and it can take an argument which points to the element of array.
// return value of this function is undefined

// using normal function
coding.forEach(function (val){
    // console.log(val)
})


// using call back function
coding.forEach((val)=>{
    // console.log(val)
})


// using direct function 
function printMe(item){
    console.log(item)
}
// coding.forEach(printMe)


/*
   parameters in forEach()
1. function() to run for each array element
2. currentValue 
3. index : it is optional
4. arr : the array of the current value
5. thisValue : default "undefind" , alue passed to the function as its this value.
*/
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})




// ******** array of object which is actually present in database
const myCoding=[
    {
        languageNAme:"javaScript",
        fileName:"js"
    },
    {
        languageNAme:"java",
        fileName:"java"
    },
    {
        languageNAme:"python",
        fileName:"py"
    },
]
myCoding.forEach((item)=>{
    // console.log(item)
    console.log(item.languageNAme)
})