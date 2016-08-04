var getcustomer = angular.module('customerlist', []);
getcustomer.controller("getcustomer", function ($scope,$http) {
	 


  var refresh=function(){
        $http.get("/GetCustDet").success(function(response){
        $scope.customerlist = response[0];
        $scope.customer="";
      });
  };

  refresh();
  $scope.DelCust=function(id){
       
         $http.post("/DelbyID",{custid:id}).success(function(response){
         refresh();

        });
  };
  $scope.EditCust=function(id){
        
         $http.post("/GetCustDetbyID",{flag:'select_cust_id',custid:id}).success(function(response){
         var tmpstr = angular.toJson(response[0]);
         var strcust = tmpstr.substring(1, tmpstr.length-1);
         var jsObj= angular.fromJson(strcust);
         $scope.customer=jsObj;

        });
  };
  $scope.UpdateCust= function(id,custname,custmob,custemail){

       
        $http.post("/updCustmob",{custid:id,cust_name:custname,cust_mobile:custmob,cust_emailid:custemail}).success(function(response){
        refresh();
        });

  };
  $scope.AddCust=function(custname,custmob,custemail){
         $http.post("/InsCust",{cust_name:custname,cust_mobile:custmob,cust_emailid:custemail}).success(function(response){
         refresh();
               

        });

    };
});