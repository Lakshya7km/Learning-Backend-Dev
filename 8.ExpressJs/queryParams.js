
// Topic: Query Parameters in Express
// /users?id=20&name=lakshya
// url.searchParams.get("id")

const express = require('express')
const app = express();

app.get("/users",(req,res)=>{
    console.log(req.query);

   
//express automatically create req.query object and store the query params
    //in server console 
    // req.query={
    //    id:"20",
    //    name:"lakshya"
    // }
  
    // res.send("Done");


    // res.send(req.query.id)
    res.send(req.query.name)
});

app.listen(3000)

//route params vs query params
//route params used to identify specific resource while query params are used  for filter,searching ,pagination,sorting  