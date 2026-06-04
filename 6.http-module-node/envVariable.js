//What is an Environment Variable?
//key value pair stored outside your program

//npm i dotenv to read the env file
//require it 
require('dotenv').config();
console.log(process.env.PORT)//5000
console.log(process.env.JWT_SECRET)

//never push .env into github
//add .env in gitignore
console.log(process.env.greet)
console.log(process.env.age)