
//Topic Route Parameter

const express = require('express')
const app = express();

// in http server we have url.searchParams.get("id") to fetch the user with /user?id=10 
//in express we have route parameter

// app.get('/users/:id',(req,res)=>{
//     res.send(req.params.id)
// })

//multiple paramter
app.get("/users/:id/posts/:postId",(req,res)=>{
   console.log(req.params)//prints object
   
    res.send(req.params)//respond with json in browser
}) 
//express see that req.params is object and it automatically convert it into JSON simillar to this res.setHeader("Content-Type","application/json");
// res.end(JSON.stringify(req.params));

http://localhost:3000/users/42897/posts/34  -> response 34 

// req.params ={
//     id:"42897",
//     postId:"34"
// }




app.listen(3000,()=>{
    console.log("Server Running at 3000")
})

// in /users/:id express treats :id as variable for /users/10
// inside express create req.params ={
//     id:"10",
// } 





//route params vs query params

//route params /users/10  access req.params.id
// query params /users?id=10  access req.query.id