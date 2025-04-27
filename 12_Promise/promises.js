// Making of promise....

import fetch from 'node-fetch';


const promiseOne = new Promise(function(resolve,reject){
    // Do any async task
    // DB calls, Cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Completed");
})


// 2nd way
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("ASync taks 2 completed")
    },1000)
}).then(function(){
    console.log("Async task 2 is resolved.")
})



// 3rd way
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Harry",email:"Hogwards@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})



// 4th way
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Georgia",email:"georgia@gmail.com"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})
promiseFour
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is resolve or rejected")
})



// 5th way => this is done using async await which does not handle the error by default....
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error){
            resolve({username:"Javascript",email:"JS@gmail.com"})
        }
        else{
            reject('Error: Something went wrong in JS')
        }
    },1000)
})
async function consumePRomiseFive(){
    try{
        const response = await promiseFive 
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
consumePRomiseFive()



// in this method response will not generated suddenly.....
// in line 93 without await you will no be able to print anything....

async function getAllUsers(){
    try {
        // const fetch = require('node-fetch')
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()





// 2nd way of doing the above method
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>console.log(error))

