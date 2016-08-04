var express=require('express');
var app=express();
var callstoredproc=require('./callstoredproc');
var updatedel=require('./updatedel');
var findloc=require('./findloc');
app.use(express.static(__dirname + "/public"));

app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
	   res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
      res.header("Access-Control-Allow-Headers", 'Content-Type');
      next();

     
      //res.header("Access-Control-Allow-Headers", "Cache-Control,Pragma,Origin,Content-Type,X-Requested-With");
      //res.header("Access-Control-Allow-Headers", "Content-Type");
     //  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  //  return next();
});
app.use(callstoredproc);
app.use(updatedel);
app.use(findloc);
//app.use("/js", express.static(__dirname + '/js'));
app.listen(3000, function () {
 console.log('listening on port 3000!');
  
});
