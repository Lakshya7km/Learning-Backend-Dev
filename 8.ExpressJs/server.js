const express = require('express')

// console.log(typeof express)//return function createApplication,type function

// we can store a function in a variable

const app = express();
//create a express application
// console.log(app)//http.createServer(..)
//app become my server object

app.get("/",(req,res)=>{
    res.send("hello world")
})



app.listen(3000,()=>{
    console.log("Server Running at 3000")
})

// Browser
//    |
// GET /
//    |
//    v
// Express App
//    |
// app.get("/")
//    |
//    v
// res.send("Hello World")
//    |
// Browser



// if(req.url === "/about" && req.method === "GET"){
//     ...
// }
// else{
//     res.statusCode = 404;
//     res.end("Not Found");
// }

//express handles the above part automatically
