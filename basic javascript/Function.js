//Topic 4: Functions and Return Values

//function : block of code that are reusable

//creating function

//function can accept multiple parameter
function greet(name){
    console.log("hello ",name)
}

greet("laksh");


//function can accept input.-> parameter 


//this give value back to the caller
function add(a,b){
    return a+b;
}
const sum = add(3,4);//caller, arguement pass to the function

console.log(sum)



// Function add(a, b) that returns the sum.
// Function multiply(a, b) that returns the product.
// Store results in variables.
// Print the results.


function multiply(a,b){
    return a*b;
}

const multiplicationResult = multiply(4,5);
console.log(multiplicationResult)