var mainApp =  angular.module("mainApp", []);
mainApp.factory('MathService', function(){
	var factory = {};               //object
	factory.multiply = function (a,b) {
	return a * b;
	}
	return factory;
});

mainApp.service('CalcService', function(MathService) {
	this.square = function (a){
		return MathService.multiply(a,a);
	}

});

mainApp.controller('CalcController', function ($scope, CalcService){
	$scope.square = function() {
		$scope.result = CalcService.square($scope.number);
	}
});
