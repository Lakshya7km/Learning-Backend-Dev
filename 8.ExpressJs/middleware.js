//Topic: Middleware ⭐


const express = require('express')
const app = express();



function logger(req,res,next){
    console.log(req.method,req.url);
    next()//next() means:
// Continue to the next middleware or route handler.
}

app.use(logger)//now every request pass through logger 
app.get('/users',(req,res)=>{
    // console.log("req received")
    res.send("hello")
})
app.get("/tasks",(req,res)=>{
    // console.log("Request received");

    res.send("Tasks");
});

app.use((req,res,next)=>{
    console.log("A");
    next();
});

app.use((req,res,next)=>{
    console.log("B");
    next();
});

app.get("/users1",(req,res)=>{
    console.log("C");
    res.send("Users");
});

//orders matters express execute top to bottom

// Request
//    |
//    v
// Middleware 1
//    |
// next()->req get stuck here
//    |
//    v
// Middleware 2
//    |
// next()
//    |
//    v
// Route Handler
//    |
// res.send()->stops the life cycle req finished
//res.json({})-ends the req
//res.end() -ends the req
//    |
//    v
// Response
app.listen(3000)

//console.log("Request received"); repetition

// Browser
//    |
//    v
// Middleware
//    |
//    v
// Route Handler app.method()
//    |
//    v
// Response

//middleware A function that runs before the route handler.

// GET /users
//       |
//       v
// logger middleware
//       |
//       | next()
//       v
// /users route
//       |
//       v
// response


// function middleware(req, res, next) {

// }
// Parameter	Meaning
// req	Incoming request
// res	Response object
// next	Continue request flow


//Topic Request - response cycle 
// Browser
//    |
//    v
// Express receives request
//    |
//    v
// Middleware #1
//    |
//    v
// Middleware #2
//    |
//    v
// Route Handler
//    |
//    v
// Response sent
//    |
//    v
// Browser receives response



// function getUsers(req,res){
//     res.send("Users");
// }

// app.get("/users", getUsers);
// Now:

// It's still a function.
// It's still called by Express when /users is hit.
// It's still technically a callback.
// But in backend architecture we give it a special name: Controller.


// Middleware order matters because Express executes middleware from top to bottom. If a required middleware runs after the route or a middleware fails to call next(), later middleware and route handlers may never execute.