const express = require('express')
const app = express();


    //error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});


app.get('/users',(res,req,next)=>{
    try{
        throw new Error("database failed")
    }catch(err){
        next(err)//Skip normal middleware
// Go directly to error middleware
    }
})



    app.listen(3000)