var express=require('express'); 
var mysql=require('mysql'); 
var connection=mysql.createConnection({ 
host:'hykrdb.cmsfrokrxjf7.us-west-2.rds.amazonaws.com', 
user:'dictuser', 
password:'qa2wsedcvr', 
database:'HYKdictionary' 
}); 
connection.connect(function(error){ 
   if(!!error){ 
     console.log('Error'); 
   }else{ 
     console.log('connected'); 
   } 
 }) 
 
module.exports = function(app) 
{ 
 app.get('/',function(req,res){ 
         res.render('index.html') 
     }); 
};
