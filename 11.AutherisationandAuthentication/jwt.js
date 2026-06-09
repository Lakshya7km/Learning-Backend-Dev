const jwt = require("jsonwebtoken");



const JWT_SECRET = "mysecretkey"; //store in .env

//create token during login 

//ex
const token = jwt.sign({
    id:userInfo.id,//payload
    name:userInfo.name,

},
JWT_SECRET,
{
    expiresIn:"1h"
})//jwt create eyJhbGciOiJIUzI1NiIs...


//after login show the token to the user

//client receive token and store it

// {
//   "success": true,
//   "token": "eyJhbGciOi..."
// }


// Protected Route

// Example:

// GET /profile

// Client sends:

// Authorization: Bearer eyJhbGciOi...


//verify token in the server side


const decode = jwt.verify(
    token,JWT_SECRET
)

// result
// {
//     id: 1,
//     email: "lakshya@gmail.com",
//     iat: ...,
//     exp: ...
// }


// Register
//    ↓
// User saved
//    ↓
// Login
//    ↓
// bcrypt.compare()
//    ↓
// jwt.sign()
//    ↓
// Token returned
//    ↓
// Client stores token
//    ↓
// Authorization Header
//    ↓
// jwt.verify()
//    ↓
// Protected Route