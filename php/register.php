<?php

include "sqlConnection.php";
$fullName = $email = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['fullName']) && isset($_POST['email']) && isset($_POST['password'])) {
        $fullName = $_POST['fullName'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "INSERT INTO userdata (fullname, email, password)
                VALUES ('$fullName', '$email', '$password')";

        if ($connection->query($sql) === FALSE) {
            echo "Error: " . $sql . "<br>" . $connection->error;
        } else {
            echo "User Added Successfully";
        }

        $connection->close();
    }
}
