var app=angular.module("simpleApp",[]);

app.controller("simpleController",function($scope)
{
$scope.collection=[
{name:"Amit",city:"Nashik"},
{name:"Neha",city:"Nashik"}];
$scope.addEntry=function()
{
$scope.collection.push($scope.newData);
$scope.newData='';
};
});