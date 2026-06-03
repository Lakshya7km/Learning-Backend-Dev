//Topic Callback
//before node js everyhting was synchronous

const { callbackify } = require("node:util");

// console.log("A");
// console.log("B");
// console.log("C");

//A
//B
//C


//sync code blocks the execution of other code

//Async will let the other code perform there task without any blocking


// console.log("A")


// //run this after 2 second
// setTimeout(()=>{
//     console.log("B")
// },2000)

// console.log("C")

//callback is function passed to another function to be executed later

function greet(name){
    console.log("hello",name);
}



//paramter  name callback
function processUser(callback){
    callback("lakshya");
}

processUser(greet)

// callback= greet



//callback using arrow function


//function created

function processUser(callback){
    callback("lakshya");
}

processUser((name)=>{
    console.log("hello",name);
})





const cb = ()=>{
    console.log("ji")
}

cb()//to run the function 


//this all are equivalent
function greet1(name1){
   console.log(name1)
}


greet1("lakshay kumar")

//and

const greet2 = function(name2){
    console.log(name2)
}

greet2("lakshya")

//and

const greet3 = (name3)=>{
    console.log(name3);
}

greet3("kumar")
// to avoid callback the promise is created

//why to avoid callback because if multiple async operation depends on each other the nested callback function will be created ?
//pyramid of doom
//hard to read
//hard to handler error
//difficult to maintain

// getUser(1, (user) => {

//     getPosts(user.id, (posts) => {

//         getComments(posts[0].id, (comments) => {

//             getLikes(comments[0].id, (likes) => {

//                 console.log(likes);

//             });

//         });

//     });

// });


//promises-> i will give you the result later
// Promise:Pending
//    |
//    +----> Fulfilled/resolved
//    |
//    +----> Rejected

// const promise =  new Promise((resolve,reject)=>{
//     resolve("UserFound")//means success
// })


//read the value
// promise.then((data)=>{
//     console.log(data)
// })

// failure case

const promise =  new Promise((resolve,reject)=>{
    reject("Data Base error")//means failure
})


//read it
promise.catch((error)=>{
    console.log(error)
})




// What is the difference between a callback and a promise?
/*
callback is passing a function in another function get executed after the function completed itS TASK
Callback:
A callback is a function passed into another function.
It is executed later when a task finishes.

Problems:
- Callback hell (deep nesting)
- Harder error handling
- Harder to read and maintain

Promise:
A Promise is an object representing a future result.

A promise can be:
- Pending
- Fulfilled
- Rejected

Benefits:
- Better readability using .then()
- Centralized error handling using .catch()
- Easier chaining of async operations

*/

// getUser()
//     .then((user) => {
//         return getPosts(user.id);
//     })
//     .then((posts) => {
//         return getComments(posts[0].id);
//     })
//     .then((comments) => {
//         console.log(comments);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



//modern javascript rarely uses raw .then() chaining


// async function getData() {
//     const user = await getUser();
//     const posts = await getPosts(user.id);

//     console.log(posts);
// }



//async/await

//predict


console.log("a");

setTimeout(() => {
    console.log("b");
}, 0);

console.log("c");


console.log("a");

Promise.resolve().then(()=>{
    console.log("b");
})

console.log("c");


//javascript has callatack -where current code runs 
//queue where async callbacks wait
//Run later, not immediately.-promise.then()

/*
//Event Loop
Call Stack
    ↓
Main code finishes
    ↓
Promise callbacks run
    ↓
setTimeout callbacks run



[
js check for first
promise queue
timer queue
]
*/
