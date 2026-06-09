const express = require('express');

const app = express();

//global middleware
app.use(express.json())


const users=[
    {id:1,name:"lakshu",email:"lakshya@gmail.com",password},
    {id:2,name:"aditya",email:"aditya@gmail.com",password}
]

app.get('/users',(req,res)=>{
   console.log(req.url);
   res.json(users)
})




app.get('/users/:id',(req,res)=>{
   console.log(req.url);
   const id = Number(req.params.id)
   const userDetails = users.find((user)=>user.id===id);
   if(!userDetails){
    res.status(404).json({
        success:false,
        message:"user not found"
    })
   }

   res.status(200).json(userDetails)
})

app.post('/users/:id',(req,res)=>{
  const {name,email} = req.body;
  const id = users.length+1;
  const newUser = {
    id:id,
    name,
    email,
    password
  }

  users.push(newUser);
  res.status(201).json({
    success:true,
    message:"User created Successfully"
  })

})


app.put('/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const singleUser = users.find((user)=>user.id===id);
    if(!singleUser){
        res.status(404).json({
        success:false,
        message:"user not found"
    })
   
    }const {name,email} = req.body;
    singleUser.name=name||singleUser.name;
    singleUser.email=email||singleUser.email;
    res.status(200).json({
        message:"user data modified"
    })


})

app.delete("/users/:id",(req,res)=>{
         const id = Number(req.params.id);
         const index = users.findIndex((user)=>user.id===id);
   if(index===-1){
    res.status(404).json({
        success:false,
        message:"user not found"
    })
   }

   users.splice(index,1);
   res.json({
    message:"User deleted"
   })
})
//splice to delete the element splice(1,3)index 1 to 3


app.listen(4000,()=>{
    console.log("Server running at port 4000");
})