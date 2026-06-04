//promise works but can become long 
//an async function automatically return the promise


// async function greet(){
//     return "hello";
// }

//actuall js does this like
// return Promise.resolve("hello")


//ex
async function greet(){
    return "hello";//return Promise.resolve("hello")

}


//resolve hone ke bad data milega 
greet().then((data)=>{
    console.log(data);
})


// function greet(){
//     return  Promise.resolve("hello");
// }


//without await
// greet().then((data)=>{
//     console.log(data)
// })


//await lets us pause inside an async function until a promise resolve

//with await
//wait untill the promise get resolved

// async function main(){
//     const user = await getUser();
//     console.log(user)
// }

// main();



//mdoel

//fn() return Promise.resolve("hello")
//          |
//async f() return "hello"
// Promise.then(...)
//       ↓
// await


//Error Handling with await
//in promise
// getUser()
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


//modern ways use try and catch

// async function main(){
//     try{

//         console.log(user);
//     } catch (err) {
//         console.log(err);

//     }
// }

//best ex
function getNumber() {
    return Promise.resolve(10);
}

async function main() {
    const num = await getNumber();

    console.log("awaited result",num);
}

main();

// await always pauses the async function,
// even if the promise is already resolved.


//predict the out put
async function main() {
    console.log("A");

    await Promise.resolve();//pause the function even the promise is resolved

    console.log("B");
}

console.log("C");

main();

console.log("D");

//C
//A
//D-> global code is finished
//B ->now js run the continouation after await



//async means this function will await and return the promises

//await cause the pause the function execution let other code run 

// async -> returns a Promise

// await -> pauses execution of the async function