var getcustomer = angular.module('customerlist', []);
getcustomer.controller("getcustomer", function ($scope) {
	console.log("Hello world from controller");
 
   customer1 = {
       name : 'Maheswari',
       mobile : '9600095068'
   };
   customer2 = {
       name : 'Manivannan',
       mobile : '9677088792'

   };
   var customerlist = [customer1,customer2];
   $scope.customerlist = customerlist;
});
