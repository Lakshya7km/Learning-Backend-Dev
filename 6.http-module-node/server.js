// Client
//    |
//    | Request
//    v
// Server
//    |
//    | Response
//    v
// Client


//node has built in http module 

const http = require('http');
//http is object
// http.createServer()-> to create a server

require('dotenv').config()
const PORT = process.env.PORT
const server = http.createServer((req,res)=>{
    //contain info about incoiming req
    console.log(req.url);//   -> /
   console.log(req.method)
 //use to send data back
    // res.end("Hello");//response is ended after one req hit, other wise server will get hanged


     
//    console.log(typeof req)//object
//    console.log(typeof req.url)//string

    if(req.url==="/"){
        res.end("Home")
    }



    //if i hit http://localhost:3000/user the req.url will give me /user so if i want to answer person with user url "hello user"

    else if(req.url==="/user"){
        res.end("Hello User")
    }

    else if(req.url==="/about"){
        res.end("this is about page")
    }else{
        res.end("404 Page")
    }
})

server.listen(PORT,()=>{
    console.log("Server running")
})


//browser send GET req to server


// Browser
//    |
//    | GET /users
//    |
// Server
//    |
//    | req.url = "/users"
//    |
// Route logic
//    |
//    | res.end("hello user")
//    |
// Browser

//req = incoming request object
// res = outgoing response object