var myApp = angular.module("mymodule", []);

myApp.controller("myController", function($scope){
	var employee = {          // built in object which contains application data & methods
		firstName: "Kanchan",
		lastName: "Katake", 
		gender: "Female"
	};
	$scope.employee= employee;

});