//Topic-7
//this refers the object that called the function

// const user = {
//     name: "lakshya",

//     greet() {
//         console.log(this.name);
//         console.log(this.name === user.name)
//         console.log(this === user)

//     }
// }

// // inside the greet() this===user

// user.greet();

//using this. in method we can use it for different object,without need to know the object name 
//this depends on how a function is called, not where it was written.we 


// this works only when the function is called throught the object


const user = {
    name: "Lakshya",

    greet() {
        console.log(this.name);
    }
};

const fn = user.greet;// the function is now out of the object so the this wont works 

fn();

//this is undefined 