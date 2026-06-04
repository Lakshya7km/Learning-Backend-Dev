//Parse url

//if we try ro access user with id =10 http://localhost:3000/user?id=10
// the req.url will give me /user?id=10
//not user

//we will parse the url only now



// const url = new URL(req.url,`http://${req.headers.host}`);

// and access

// /user?id=10&name=lakshya

// url.pathname ->"/user"
// url.searchParams.get("id")->"10"
// url.searchParams.get("name")->"lakshya"

const { access } = require('fs');
const http = require('http');

require('dotenv').config()
const PORT = process.env.PORT
const server = http.createServer((req,res)=>{
        const url = new URL(req.url,`http://${req.headers.host}`);
      console.log(url.pathname);
      console.log(url.searchParams.get("id"))
      console.log(url.searchParams.get("name"))
      
      if(url.pathname==="/user"){
        res.end("User ID is " +url.searchParams.get("id"));
      }else{
        res.end("404 Not found")
      }
})

server.listen(PORT,()=>{
    console.log("Server running")
})


//we need to seperat the path and the query


// /user?id=10&name=lakshya

// pathname
//    |
//    v
// /user

// query params
//    |
//    +-- id = 10
//    |
//    +-- name = lakshya


//?  all after is query parameter 