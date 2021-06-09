<?php
$my_strg = 'World';
echo "Hello, $my_strg!<br>";      // Displays: Hello World!
echo 'Hello, $my_strg!<br>';      // Displays: Hello, $my_str!
 
echo '<pre>Hello\tWorld!</pre>'; // Displays: Hello\tWorld!
echo "<pre>Hello\tWorld!</pre>"; // Displays: Hello   World!
echo 'I\'ll be back';            // Displays: I'll be back

$my_str = 'Welcome to Tutorial Republic';
 
// Outputs: 28
echo strlen($my_str);

$my_str1 = 'The quick brown fox jumps over the lazy dog.';
 
// Outputs: 9
echo str_word_count($my_str1);

$my_str2 = 'If the facts do not fit the theory, change the facts.';
 
// Display replaced string
echo str_replace("facts", "truth", $my_str2);

$my_str3 = 'You can do anything, but not everything.';
 
// Display reversed string
echo strrev($my_str3);

?>