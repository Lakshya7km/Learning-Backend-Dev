//Topic 6: Closures

///function inside a function -> nested function


function outer(){
    const name = "lakshya";

    function inner(){
        console.log(name)
    }
 
    // inner();
    return inner;//also 
}

const myFun = outer();
myFun();
//inner function can access variable from its parent scope
//this is called lexical scoping


//closure
//when javascript return inner -> it return the function + access to variable it needs, that memory is called closure
//A function that remembers variables from its outer scope even after the outer function has finished executing.


//real example 

function createCounter(){
    let count=0;


    //create this function
    function incremenet(){
        count++;
        return count;
    }

    return incremenet;// we are returnning the function itself not the value  then the return function is stored in the counter();
}

//counter -> increment function
const counter =  createCounter();
//first call\|/
console.log(counter())

console.log(counter())

console.log(counter())

//why we need to create the counter variable when we have createCounter as function
/*You can imagine:

counter = function increment() {
    count++;
    return count;
}

except it also remembers:

count = 0

This remembered data is the closure.
*/

//normally after function finishes the variable will be diasappear like in this case that variable is count
//but in this case return incremenet the returned function still needs count so it is alive in javascript-> closure is function+the remebered varaibles
//Each function instance gets its own private remembered variables.
