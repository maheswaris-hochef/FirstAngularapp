var mysql=require('mysql');
var express = require('express');
var bodyParser=require('body-parser');
//var app= express();
var app= module.exports = express();


var connection = mysql.createConnection({
	host:'aa48jcj8o44ss4.c6uleb0iwped.us-west-2.rds.amazonaws.com',
	user:'hochefdb',
	password:'Hochef1234',
	database:'M_TestDB'
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/updCustmob',function(req,res){
//testing purpose
//var params = "'select_cust', 0";
//for prod
//var flag = req.body.flag;
var custid = req.body.custid;
var cust_name=req.body.cust_name;
var cust_mobile=req.body.cust_mobile;
var cust_emailid=req.body.cust_emailid;
//var params = "' + flag + ', + custid +";
//console.log(params);
connection.query("CALL testcustomer_actions('update_cust_mobile'," + custid + ",'" + cust_name + "','" + cust_mobile + "','" + cust_emailid + "')",function(err,rows,field){
	
	if(!err){
		
		console.log(rows);
		// res.end( JSON.stringify(rows));
        res.send( JSON.stringify(rows));
	}else{
		
		
		console.log(err);
       // res.end( JSON.stringify(err));
		res.send( JSON.stringify(err));
	}
	
});

});
app.post('/DelbyID',function(req,res){
//console.log(req.body.custid);
//console.log(JSON.parse(req.body));
//var paramid = req.body.custid;
//testing purpose
////for prod
//var flag = req.body.flag;

var custid = req.body.custid;

//var params = "' + flag + ', + custid +";
//console.log(params);
connection.query("CALL testcustomer_actions('Del_cust_mobile'," + custid + ",'','','')",function(err,rows,field){
	
	if(!err){
		
		console.log(rows);
		//res.end( JSON.stringify(rows));
        res.send( JSON.stringify(rows));
	}else{
		
		
		console.log(err);
	    //res.end( JSON.stringify(err));
		res.send( JSON.stringify(err));
	}
	
});
});
app.post('/InsCust',function(req,res){
//console.log(req.body.custid);
//console.log(JSON.parse(req.body));
//var paramid = req.body.custid;
//testing purpose
////for prod
//var flag = req.body.flag;
var cust_id = req.body.cust_id;
var cust_name = req.body.cust_name;
var cust_mobile = req.body.cust_mobile;
var cust_emailid = req.body.cust_emailid;

//var params = "' + flag + ', + custid +";
//console.log(params);
connection.query("CALL testcustomer_actions('InsertCust',0,'" + cust_name + "','" + cust_mobile + "','" +  cust_emailid + "')",function(err,rows,field){
	
	if(!err){
		
		console.log(rows);
		//res.end( JSON.stringify(rows));
        res.send( JSON.stringify(rows));
	}else{
		
		
		console.log(err);
	    //res.end( JSON.stringify(err));
		res.send( JSON.stringify(err));
	}
	
});
});
//app.listen(3000, function () {
  //console.log('listening on port 3000!');
//});

