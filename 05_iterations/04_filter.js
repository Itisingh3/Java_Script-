const coding=["js","ruby","java","python"]

// forEach return nothing so it prints undefined
const value=coding.forEach(function (val){
    // console.log(val)
    return val
})
// console.log(value)




// *********  If you want to return something , in that case you can use filter.
const mynums=[1,2,3,4,5,5,6,7,8,9,10]
const newnums=mynums.filter((num)=>{ return num>4})
// console.log(newnums)

const newnums1=mynums.filter((num)=> num>4 )
console.log(newnums1)
// above two line 15 and 19 are result equivalent but syntactically different


// you can also use forEach() in place of filter 
// it will also print the same output
const newnums2=[]
mynums.forEach((num)=>{
    if(num>4) newnums2.push(num)
})
console.log(newnums2)





// ********* exercise **********
const books=[
    {
        title:'The palace of Illusions',
        genre:'Fiction',
        writer:'Chitra Bannerjee'
    },
    {
        title:'Harry Potter',
        genre:'Fiction',
        writer:'JK Rowlling'
    },
    {
        title:'Dairy of young Girl',
        genre:'Publish',
        writer:'Anne Frank'
    },
    {
        title:'To kill a mocking bird',
        genre:'Non-Fiction',
        writer:'Harper Lee'
    },
    {
        title:'Daydream',
        genre:'Fiction',
        writer:'Hanna Grace'
    }
]

let userBooks=books.filter((book)=> book.genre === 'Fiction')
console.log(userBooks)








// **************  filter on map ***************
const mynumbers=[1,2,3,4,5,5,6,7,8,9,10]

// const newnums3 = mynumbers.map((num)=>{return num+10})
// console.log(newnums3)

// each time the returned array gets updated.
const newnums3 = mynumbers
                    .map((num)=> num*10)
                    .map((num)=> num+1)
                    .map((num)=> num>=40)
console.log(newnums3)