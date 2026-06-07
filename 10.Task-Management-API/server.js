const express = require('express')
const app = express();
const tasksRoute = require('./routes/tasksRoute')
const usersRoute = require('./routes/usersRoute')
require('dotenv').config()
app.use(express.json());
app.use('/tasks',tasksRoute)
app.use('/users',usersRoute)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server Running at PORT ${PORT}`)
})
