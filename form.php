<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wt_asmt";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$firstname = $_POST['f_name'];
$lastname = $_POST['l_name'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$password = $_POST['password'];


$sql = "INSERT Into register (firstname,lastname,email,password,gender) 
values ($firstname,$lastname,$email,$password,$gender)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>