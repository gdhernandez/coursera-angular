(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)
  LunchCheckController.$inject=['$scope','$filter']

 function LunchCheckController($scope,$filter ){
   $scope.menu="";

   $scope.calculamenu= function(){
     if($scope.menu==""){
       $scope.message="Please enter data first"
     }
     else {
       var menuarray= $scope.menu.split(',');
       var tamanoArray= menuarray.length;
       $scope.menu=menuarray;

       if(tamanoArray<=3){
         $scope.message='Enjoy!';

       }
       else{
         $scope.message='Too much!';
       }
     }



   } ;



 }



})();
