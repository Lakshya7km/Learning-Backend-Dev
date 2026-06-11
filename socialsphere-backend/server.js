const express = require('express')
const app = express();
require('dotenv').config();
const connectDB = require('./config/db')
const PORT = process.env.PORT
const authRoutes = require('./routes/auth.routes')
//global middleware
app.use(express.json())
//data base Connection 
const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']); // Bypasses network DNS restrictions

connectDB();

app.get('/',(req,res)=>{
    res.json({
        message:"Server running fine"
    })
})

app.use('/api/v1/auth', authRoutes)
app.listen(PORT, () => {
    console.log("Server is running")
})