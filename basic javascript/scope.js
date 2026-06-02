//Topic 5: Scope

//scope determine: where a variable can be accessed? 

//global Scope 
const name = "Rahul";
//because name is global everything can access it 

function greet(){
    console.log("hello",name);
}

greet();

//Function scope

function greet1(){
    const msg = "Hello";
    console.log(msg);
}


greet1();
// console.log(msg)//msg is not defined becuase the msg is local/function scope only exist inside the function : ReferenceError



//block scope
//let and const are block scope
// {

// }

if(true){
    const name1 = "lakshya"
}

console.log(name1)//Refrence Error name1 exist only inside the block 

//but var used variable name can be accessed outside the block thats why it is dangerous and not preffered in modern days 
