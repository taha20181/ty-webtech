var app1 = angular.module("First", []);

app1.controller("firstController", function($scope){
$scope.message = "WT angular";
});

app1.controller("dataController", function($scope){

	var employeeList = [
		{firstname:"John", lastname: "Paul",gender: "Male", salary: 30000},
		{firstname:"Shan", lastname: "Jobs",gender: "Male", salary: 33000},
		{firstname:"Rose", lastname: "Mary",gender: "Female", salary: 20000},
	];
	$scope.employees = employeeList; 
});