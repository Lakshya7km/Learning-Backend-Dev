//Topic : Process
//currently running Node.js Program

//when we run the node app.js the process object store info about that running program

//ex1

console.log(process.pid)
//26053


//current working dir

console.log(process.cwd())

//node version
console.log(process.version)

//ex 4 command line arg
console.log(process.argv)

/*
[
 'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Learning Baceknd\\6.http-module-node\\process.js',
  'lakshya',
  '12',
  '432' 
]*/

//argv - argument vector
//node executable path process.argv[0]

console.log(process.argv[0])

//current file
console.log(process.argv[1])

//first argument
console.log(process.argv[2])//lakshya

//2nd argument
// console.log(process.argv[3])//12


// node prcoess.js lakshya 12





console.log("Start");

// process.exit();

// console.log("End");






// Node Process
// │
// ├── pid
// ├── version
// ├── argv
// ├── cwd
// ├── env
// └── exit()



function greet(name){
    console.log("hello",name)
}

const name = process.argv[2];
greet(name);

