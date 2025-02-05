// singleton => made only using constructor but not using literals.

const mySym=Symbol("key1");


// object literals =>key : value
const JsUser={
    name:"Harry",
    "fullname":"Harry Potter",
    [mySym]:"key1",           // [] because data type of symbol should not be change.  and without [] its data type will changed
    age: 12,
    email: "Harray@hogwards.com",
    isLoggedIn:false,
    lastLogginDays:["Monday", "Tuesday"]
}

// access objects => 2 ways
// fullname is only accessed by second method
// generlly we use . but in some cases [] will be used.
console.log(JsUser.name);
console.log(JsUser["email"]);

console.log(JsUser[mySym]);          //only way to acess the symbole in jsUser.

JsUser.email="Harry@howards.gmail.com";
// Object.freeze(JsUser)       //Now no elements of objects will be changed.
JsUser.email="Harry@hogwards.com";
console.log(JsUser);




JsUser.greeting = function(){
    console.log("HEllo Js User");
}
JsUser.greetingtwo = function(){
    console.log(`HEllo Js USer ,${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());