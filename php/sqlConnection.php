<?php 

$dbServerName = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "login-register";

$connection = new mysqli($dbServerName, $dbUserName, $dbPassword, $dbName);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
