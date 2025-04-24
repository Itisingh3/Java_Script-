const course={
    coursename:"Physics",
    price:"1999",
    courseteacher:"Alakh Pandey"
}
// 1. way
// course.courseteacher

/*2. way
Object Destructuring
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





class Human{
    // properties
    age=13;
    #wt=80;   //private
    ht=180;
    constructor(age,ht,wt){
        this.age=age;
        this.#wt=wt
        this.ht=ht;
    }
    walking(){
        console.log("I am walking...",this.#wt);
    }
    running(){
        console.log("I am running...");
    }
    get fetchweight(){
        return this.#wt;
    }
    /**
     * @param {number} val
     */
    set modifyweight(val){
        this.#wt=val;
    }
}
let obj=new Human(50,190,101);
console.log(obj.fetchweight())
// error
// console.log(obj.#wt);

