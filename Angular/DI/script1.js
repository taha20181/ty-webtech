var app = angular.module("myModule",[]);

app.value("numberValue",999);
app.value("stringValue","abc");
app.value("objectValue",{val1: 123,val2: "abc"});

app.controller("MyController",function ($scope, numberValue){
	console.log(numberValue);
});


app.constant("configValue", "Constant value, can bepassed in config() function.");
myservice.config(function (serveProvider,configValue){
	serviceProvider.doConfiguration(configValue);
});
 
 
