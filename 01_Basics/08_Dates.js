// Date is an object.
// It is calculated in milliseconds
let mydate = new Date();
// console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate);


// let myCreateddate = new Date(2023,9,19);
// let myCreateddate = new Date(2023,9,19,5,3);
let myCreateddate = new Date("2023-01-14");
console.log(myCreateddate.toLocaleString());




let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(myCreateddate.getTime());   //you can compare it easily
console.log(Math.floor(Date.now()/1000))




let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())



newDate.toLocaleString('default',{
    weekday : "long",           //it will give complete Monday
})