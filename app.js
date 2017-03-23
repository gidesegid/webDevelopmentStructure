var express = require('express'); 
var app = express(); 
var fs = require('fs'); 
var bodyParser=require('body-parser'); 
var path=require('path'); 
require('./router/main')(app); 
app.set('views',__dirname + '/views'); 
app.engine('html', require('ejs').renderFile); 
app.use(express.static(__dirname+'/public')); 

app.listen(3000); 
console.log("server is running on port 3000"); 
