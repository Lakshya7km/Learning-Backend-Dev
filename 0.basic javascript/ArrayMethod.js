const nums = [1, 2, 3, 4];

//map()
//transform each elemente and return new array
const double = (num) => {
    return num * 2;
}

const doubled = nums.map(double)
//it just map the old with new transformed el
/*1 -> 2
2 -> 4
3 -> 6
4 -> 8
*/

console.log(doubled)


const students = ["lakshya", "john", "rahul", "sakshi"]

const add24100 = (student) => {
    return student + "24100"
}

const updatedStudent = students.map(add24100);
console.log(updatedStudent)


//filter()
//keep element only that pass a condition

const even = nums.filter((num)=> {
    return num%2==0;
})

// 1 -> false -> remove

// 2 -> true -> keep

// 3 -> false -> remove

// 4 -> true -> keep


console.log(even);



//reduce()
//reduce many value into one value.
//common use - > sum,count,total,grouping

const total = nums.reduce((accumulator,current)=>{
    return accumulator+current;
},0)
//current value is 0
console.log(total)

//acc =0
//0+1
//1+2
//3+3
//6+4

// array.reduce(callback, initialValue)
const result = nums.reduce((acc,curr)=>{
return acc*curr;
},1)


console.log(result)


//calculate total order

const orders = [
      { amount: 100 },
    { amount: 200 },
    { amount: 300 }
]


const ans = orders.reduce((acc,curr)=>{
        return acc+curr.amount;
},0)

console.log(ans)



//find() return the matching element
const users = [
    {name:"Lakshya"},
    {name:"Rahul"},
    {name:"Aman"}
];


const user = users.find((u)=>{
    return u.name==="Rahul";
})

console.log(user)


//some() return true if at least one element matches



const ansSome = nums.some((num)=>{
    return num%2===0;
})

console.log(ansSome)

//every() return true if every element matches

const ansEvery =  nums.every((num)=>{
    return num%2===0;
})

console.log(ansEvery)