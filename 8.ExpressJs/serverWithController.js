const express = require('express')
const app = express();
const {getUser} = require('./Controllers/userController')
app.use(express.json())

app.get("/users",getUser)//passing teh function reference does not call the function immediately

app.listen(3000)




Controllers

// A controller is simply a function whose job is:

// Receive Request
// ↓
// Process Request
// ↓
// Send Response