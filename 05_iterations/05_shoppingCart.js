/*
reduce() method retruns a single value the function accumulated result
it does not execute the function for empty array elements
it does not the change the original element
accumulated result from the last call of the callback function.
*/



const mynums=[1,2,3]

// **** readable code *****
// const myTotal = mynums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)

// ****** inline code *******
const myTotal = mynums.reduce((acc,curr)=> acc+curr,0)
// console.log((myTotal))








// ********* shopping cart ***********
const shoppingCart=[
    {
        itemname:"js course",
        price:3988
    },
    {
        itemname:"py course",
        price:345
    },
    {
        itemname:"cpp course",
        price:2390
    },
    {
        itemname:"c course",
        price:678
    }
]
const totalPrice= shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(totalPrice)