//Topic - ArrayDestructing 
const colors = ["red", "blue", "green"];

const [c1,c2] = colors

console.log(c1);
console.log(c2);

//skipping values


const[,second]=colors
console.log(second);


//renaming variable

const user = {
    name:"Lakshya"
}

const {name:username} = user;

console.log(username)


//Spread(...) and Rest(...)


//Spread(...) take a collection and spread it out

const arr1=[1,2,3,5,4];

let arr2=[...arr1]//a copy is created
console.log(arr2)

const arr3=[2,4,67,9,0]
// const res = arr1+arr3//return string value not the array
// console.log(typeof res)


arr2=[...arr1,...arr3]// -> one array []
// arr2 =[arr1,arr3]-> one array but subarray inside it [[],[]]
console.log(arr2)


//object Spread

const user1 = {
    name:"lakshya"
}

const updateduser = {
    ...user1,
    age:20
}

console.log(updateduser)


//Rest Operator - collect remaining value

function sum(...numbers){
    console.log(numbers)
}

sum(1,2,3,4,5)// becomes number=[1,2,3,4,5]

//Destructering with rest

const [first,...remaining] = arr1;

console.log(first)
console.log(remaining)




//when ... value at the right Spread values outconst b = [...a];

//when...function test(...args) Gather remaining values


const a=12;
const b=12;
//weakly inequality js try to convert the type
console.log(a=="a")//true
console.log(a==="a")//false
