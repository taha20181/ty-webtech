<?php

//GLOBAL KEYWORD
$greet = "Hello World!";
 
// Defining function
function test(){
    global $greet;
    echo $greet;
}
 
test(); // Outpus: Hello World!
echo $greet; // Outpus: Hello World!
 
// Assign a new value to variable
$greet = "Goodbye";
 
test(); // Outputs: Goodbye
echo $greet; // Outputs: Goodbye
?>