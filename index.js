const express=require('express');
const app=express();
const port=8000;

app.listen(port,function(err){
    if(err){
        console.log("error occured:",err);
    }
    console.log("your server run using port no:",port)
})