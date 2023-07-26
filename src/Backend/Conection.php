<?php

$server = 'localhost';
$user = 'root';
$password = '';
$dbname1 = 'vertical_onchard_utc6';

$conn = new mysqli($server, $user, $password, $dbname1);

if ($conn->connect_error) {
    die("conexión fallida: " . $conn->connect_error);
}
else {
    echo "<script>console.log('Conexion establecida a ' . $dbname1)</script>";
}

// consulta para obtener los cantantes
$sql = "SELECT * FROM empleados";
$result = $conn->query($sql);
echo $result;

?>