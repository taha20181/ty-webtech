<?php
// Defining function
function divideNumbers($dividend, $divisor){
    $quotient = $dividend / $divisor;
    $array = array($dividend, $divisor, $quotient);
    return $array;
}
 
// Assign variables as if they were an array
list($dividend, $divisor, $quotient) = divideNumbers(10, 2);
echo "dividend : ".$dividend.", ";  // Outputs: 10
echo "divisor : ".$divisor.", ";   // Outputs: 2
echo "quotient : ".$quotient;  // Outputs: 5
?>