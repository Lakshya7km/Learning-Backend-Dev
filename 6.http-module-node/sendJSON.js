

const { access } = require('fs');
const http = require('http');

require('dotenv').config()
const PORT = process.env.PORT
const server = http.createServer((req, res) => {
   

        //send response back to the clinet and tell its JSON
 const data = {
        name:"Lakshya",
        age:20
    };

    res.setHeader("Content-Type","application/json");//im sending JSON da

    res.end(JSON.stringify(data));
    
       
})

server.listen(PORT, () => {
    console.log("Server running")
})