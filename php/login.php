<?php

include "sqlConnection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['email']) && isset($_POST['password'])) {

        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM userdata WHERE email = '$email'";
        $result = $connection->query($sql);

        $passwordsql = "SELECT password FROM userdata WHERE email = '$email'";
        $passwordResult = $connection->query($passwordsql);

        $rowEmail = $result->fetch_assoc();
        if ($result->num_rows > 0 && $rowEmail['email'] === $email) {
            $row = $passwordResult->fetch_assoc();
            if ($row['password'] == $password) {
                echo "200";
            } else {
                echo "401";
            }
        } else {
            echo "User doesn't Exist";
        }
        $connection->close();

        // header('location: http://workingdemo.com/login.html');
    }
}
