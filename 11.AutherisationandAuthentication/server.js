const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json())

let users = []

app.get("/users",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"users fetched",
        users
    })
})
app.post('/users/register',async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    const hashedPassword =await bcrypt.hash(password,10);
    const newUser = {
        id:users.length+1,
        name,
        email,
        password:hashedPassword

    }

    users.push(newUser);
    return res.status(201).json({
        success:true,
        message:"User created Successfully"
    })
})


//login
app.post("/users/login",async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"email and password required for login"
        })
    }

    
        const foundUser = users.find(user=>user.email===email)
        if(!foundUser) return res.status(404).json({ success:false,message:"Invalid credential"})
        const isMatched = await bcrypt.compare(password,foundUser.password)
        if(!isMatched){
            return res.status(401).json({
                  success:false,
                  message:"Unauthorized"
            })
        }else{
            return res.status(200).json({
                success:true,
                message:`Welcome ${foundUser.name} ,email : ${foundUser.email} id:${foundUser.id}`
            })
        }
})

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})