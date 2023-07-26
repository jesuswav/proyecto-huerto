<?php

session_start();

require 'Conection.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sqlauth = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $sqlauth->bind_param('ss', $username, $password);
    $sqlauth->execute();

    if ($sqlauth->fetch()) {
        $_SESSION['username'] = $username;
        header('Location: ../Principal.php');
        exit();
    } else {
        // header('Location: login.html');
        echo '<script type="text/javascript">
            alert("Datos incorrectos");
            window.location.href="./Login.html";
            </script>';
        exit();
    }
}

?>