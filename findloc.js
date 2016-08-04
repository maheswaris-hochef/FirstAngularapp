var express = require('express');
var bodyParser=require('body-parser');
var Str = require('string');
var request = require('request');
var app= module.exports = express();
   var ipaddr;
     var ctry_name;
     var ctry_code;
     var ipdatastr;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(Str);
app.get('/getCountry',function(req,res){
//var ip = req.headers['x-forwarded-for'] || 
    // req.connection.remoteAddress || 
   //  req.socket.remoteAddress ||
   //  req.connection.socket.remoteAddress;
   //  console.log(ip);
  
     var ip= Str(req.connection.remoteAddress);
     if (ip.length < 15){

              ipaddr = ip;
              console.log(ipaddr.s);
      }
      else if(ip.substr(0,7) == "::ffff:")
       {

              ipaddr = ip.substr(7,ip.length-1);    
              console.log(ipaddr.s);
       }
       request("http://ip-api.com/json/" + ipaddr.s, function(error, response, body) {
            console.log("http://ip-api.com/json/" + ipaddr.s);
            if(!error && response.statusCode == 200){

                ipdatastr = JSON.parse(body);
                ctry_code = ipdatastr["countryCode"];
                ctry_name = ipdatastr["country"];
                console.log(ctry_code + "-" +ctry_name);
                res.send("countrycode:" + ctry_code + ",country:" + ctry_name );
                // console.log(JSON.stringify(body));
                // console.log(JSON.parse(body));
             }
            // console.log(body);
       });
      /* req({

              uri: "http://ip-api.com/" + ipaddr.s,
              method: "GET",
              timeout: 10000,
              followRedirect: true,
              maxRedirects: 10
           }, function(error, response, body) {
               console.log(body);

        });*/

       console.log(req.connection.remoteAddress);
      
 
 });

