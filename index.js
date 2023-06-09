const express=require('express');
const app=express();
const port=8000;

const expressLayouts=require('express-ejs-layouts');
app.use(express.static('./assets'))
app.use(expressLayouts);
//extract style and scripts from sub pages
app.set('layout extractStyles',true)
app.set('layout extractscripts',true)
// use express Routes
app.use('/',require('./routes'));

// set up ejs view engine
app.set('view engine','ejs')
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log("error occured:",err);
    }
    console.log("your server run using port no:",port)
})