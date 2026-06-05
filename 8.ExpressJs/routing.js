
//Topic Routing
const express = require('express')
const app = express();

//get method
app.get("/users",(req,res)=>{
    res.send("get users")
})

//post method
app.post("/users",(req,res)=>{
    res.send(" post user")
})

//put method
app.put("/users",(req,res)=>{
    res.send("Update user")
})

//delete method
app.delete('/users',(req,res)=>{
    res.send("Delete User")
})

app.listen(3000,()=>{
    console.log("Server Running at 3000")
})


//different method -> different route handler
//if route names are same but their methods are different they work without conflict
