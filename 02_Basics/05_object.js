const course={
    coursename:"Physics",
    price:"1999",
    courseteacher:"Alakh Pandey"
}
// 1. way
// course.courseteacher

/*2.Object Destructuring
Destructuring extracts the courseteacher property from the course object into a separate variable.
equivalent to: const courseteacher = course.courseteacher;
*/
const {courseteacher}=course
console.log(courseteacher)

/*
Dot notation is useful when accessing a property directly.
Destructuring is more convenient when multiple properties are needed at once:
const { coursename, price, courseteacher } = course;
console.log(coursename, price, courseteacher);
*/

// use teach instead of courseteacher with the help of destructuring
const {courseteacher: teach}=course
console.log(teach)




// API
/*values in json format
{
    "name" : "harry",
    "subject" : "potions"
}
*/



// json file syntax in an array.
[
    {},
    {},
    {}
]


