//Express JSON Body Parsing (req.body)

//in node http server we use req.on() which fires data even to accumulate teh req coming from the client 

// Create empty string
// Collect chunks
// Wait for end
// Parse JSON manually

//express solution 
//middleware 
//app.use(express.json())

//this middleware
// This middleware automatically:

// Receive chunks
// ↓
// Combine chunks
// ↓
// JSON.parse()
// ↓
// Store result in req.body




const express = require("express");

const app = express();

// app.use(express.json());//to parse the JSON data from the client we use this middelware
//without this undefined

app.post("/users",(req,res)=>{
    console.log(req.body);//undefined if nothing in body
    //in  postman if not valid json is entered it throw error syntax error
    

    //express create
    
//     req.body={
//   name:"Lakshya",
//   age:20
// }

    res.send("User Created");
});

app.listen(3000);

// Why app.use()?
//run this for every request coming from the client
//app.use(express.json());
//  For every request:
// If body contains JSON
// Parse it
// Store in req.body
// Thunder Client
//      |
// POST /users
// {
//  "name":"Lakshya"
// }
//      |
//      v
// express.json()
//      |
//      v
// req.body
// {
//  name:"Lakshya"
// }
//      |
//      v
// Route Handler
//      |
//      v
// Response

// Express.json() automatically parses incoming JSON request bodies and stores the result in req.body.

// The Most Important Express Table

// Memorize this:

// URL / Body	Access With
// /users/10	req.params.id
// /users?page=2	req.query.page
// { "name":"Lakshya" }	req.body.name