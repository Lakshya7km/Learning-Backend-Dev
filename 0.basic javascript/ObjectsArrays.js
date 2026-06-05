//DSA you'll use every day in backend development

const user ={
    name:"lakshya",
    age:20,
    city:"Raipur",
}


//object store data as  key:value

//dot notation
console.log(user.name);


//updating
user.name="rahul";
console.log(user.name)


//adding new properties
user.play="football";
console.log(user)


//deleting properties
delete user.play;
console.log(user)

//Arrays - used to store the simillar element. ordered collection of value

const fruits = ["apple","banana","mango"]
//             0          1        2


//accessing element
console.log(fruits.length)//3
for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}


//add to end push()
fruits.push("grapes")
console.log(fruits[fruits.length-1]);

console.log(fruits)//
// [ 'apple', 'banana', 'mango', 'grapes' ]


//remove from end  pop()
fruits.pop();
console.log(fruits)

//shift() remove the first element and shft the rest element towards starting index
fruits.shift();
console.log(fruits)


//unshift();- to add element at the beginning

fruits.unshift("apple");
console.log(fruits)