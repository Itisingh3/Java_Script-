const name = "Harry";
const repocount= 50;
// console.log(name+ repocount+ " value");


console.log(`Hello my name is  ${name} and my repocount is ${repocount}`);



// Go in Browser and see all the stirngs method's.
const gameName = new String('Potter');
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());     // Original value had not change.
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));



const newString= gameName.substring(0,4);
console.log(newString);



const anotherString= gameName.slice(-8,3);
console.log(anotherString);



const newStringOne = "   Harry ";
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "http://google@.com"
console.log(url.replace('@' , '#'));
console.log(url.includes(':'));




const temp = "Currently I am Reading Every Thing I know about love";
console.log(temp.split('-'));