<?php

session_start();

$servername = "localhost";
$username = "root";
$password = "ChakalZoulou_77";
$database = "cinema";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}

catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}

?>