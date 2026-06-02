// Phase 1 — Topic 1: let, const, and var
//variable that stores value,


//1.var (old) 
var name = "lakshya";
// console.log(name);
//why var is not used in moder days ?
//reason: The variable age now stores the value 30. The old value 20 is no longer referenced by age, so it becomes eligible for garbage collection.

var age = 20;//no longer referenced by age
var age = 30;
//JS Garbage collector clean the unreachable data from memory
// console.log(age);



//2. let (Modern)

//use when the value may change later
//let variable can be reassigned
let balance = 1000;
balance = 500;
// console.log(balance);



//3.const (Modern Preffered Ways)
//use when the value should never be reassigned
//forcefullu reassigning the const variable returns TypeError.
const country = "INDIA";
// country ="INDIANA"
// console.log(country)



//rules
//use by default const
//use let when value need to change
//never use var



//increment Operator
let count  =0;
//++count increment the value first then use it.
// console.log(++count)

count = 0;
count++;//use the current value first then increase it.
// console.log(count++)




//Topic 2: Primitive vs Reference Values
//Made Mistake - 

let a = 10;
let b = a;


//so js copies the value of a into b 
//a->10 ->write on paper a ->erase then again write in paper A
//b->10  ->photocopy of paper a ->


//so after updating the value of a the value of b remains unchanged because it is an independent variable , it only knows my value is 10;

a=20;
console.log(a);
console.log(b);



//Primitive Types
//-Copied By value
//number,String,Boolean,undefined,null,BigInt,Symbol
//if we change the old variable it wont affect the another new varible having value reassigned with the old.
//copy the whole value or data


//Referencce Type:copied by refrence
//only copy the reference(address)

let user1 = {
    name:"Laksh"
}

let user2=user1;
user1.name = "Rahul";


console.log(user1.name);
console.log(user2.name);


console.log(user1.name===user2.name)//returns true
console.log(user1===user2)//true


//in JS user1 --> {name:"Laksh"}

//unlike number and String JavaScript does not copy the whole Object

//instead the new object user2 copies the reference(Address) of the user1


//if you change user1 then it will affect the user2
// user1 ──┐
//          ├──► { name: "Lakshya" }
// user2 ──┘


//case 1 modify the object

let u = {
    age:20
}

let u1 = u;

u.age=21;
console.log(u1.age);
console.log(u.age);


//case2 - reassigne the variable

let user3 = {
  name: "Lakshya"
};

let user4 = user3;
//reassignment below

user3 = {
  name: "Rahul"
};

console.log(user3.name);
console.log(user4.name);


//memory before reassignment
// user3 ──┐
//          ├──► { name: "Lakshya" }
// user4 ──┘

//memory after reassignment
// user3 ────► { name: "Rahul" }
        
// user4 ────► { name: "Lakshya" }



//  Primitive vs reference values
/*In premitive data types the value is get copied from one variable to another 
Types of Primitve data are: Number,String,Boolean,null , undefined,BigInt
reassigning the old variable with new value wont affect the new variable assigned to old one,
both are independent to each other.


In Reference Values the datas are shared via address or refrence to different objects or arrays.
the values are copied by the refrence.
1.modifying the data inside object1 affect the others object2 that refrence to  object1.
2.reassigning the whole object  should result new object creation with new object data.
*/