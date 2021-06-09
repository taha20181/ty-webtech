var app = angular.module("app",[]);

app.controller('emp',function(){

});

app.directive('myInfoMsg', function(){
	return{
		template: "<strong>This is a message</strong>"
	};
});