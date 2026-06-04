//Topic parse JSON req body
//how to send json inside the req.body
//Request
// │
// ├── URL
// ├── Method
// └── Body

//POST /users

//body 
// {
//   "name": "Lakshya",
//   "age": 20
// }


//in node req.body does not exist we need to handel the  incoming JSON data mannaully

//node might receive the data in chunks 
//chunk 1: { "name":
//chunk 2 : "lakshya",
//chunk 3: "age" :20 }


//node combine them 
//data event -> whatever chunks come the data event fires

// req.on("data",(chunk)=>{
//     console.log(chunk)
// })

// //end even 
// req.on("end",()=>{
//     console.log("finished")
// })

//building the body
//create empty string 
// let body = "";

// //2.collect chunks

// req.on("data",(chunk)=>{
//     body+=chunk;
// })

// //when finished
// req.on("end",()=>{
//     console.log(body)
// })





//convert JSON string --> Object
//use JSON.parse()- whatever JSON you want to convert into object

// const user= JSON.parse(body);


const { access } = require('fs');
const http = require('http');

require('dotenv').config()
const PORT = process.env.PORT
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url==="/users") {


        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })

        req.on("end", () => {

            try {
                console.log(typeof body)
                console.log("RAW BODY:");
console.log(JSON.stringify(body));
                const user = JSON.parse(body)//JSON string to object coversion
                console.log(user);
                console.log(typeof user)
                res.end("User created")
            } catch (error) {
                res.statusCode=400;
                res.end("Invalid JSON")
            }
        })
    }
})

server.listen(PORT, () => {
    console.log("Server running")
})


// Client
//    |
//    | POST /users
//    |
//    | {
//    |   "name":"Lakshya"
//    | }
//    |
// Server
//    |
//    | data event
//    | data event
//    | data event
//    |
//    | end event
//    |
//    | JSON.parse()
//    |
// Response