<?php

// require 'Conection.php';

$temperature = floatval($_POST["price"]);
$humidity = $_POST["sliderInput"];
$id_plant = $_POST["jardineria"];

$hours = $_POST["hours"];
$minutes = $_POST["minutes"];
$seconds = $_POST["seconds"];

$irrigation_time = "$hours.$minutes";
$irrigation_time_float = floatval($irrigation_time);

if ($id_plant == 'Mota') {
    $id_plant_number = 0;
} elseif ($id_plant == 'Perejil') {
    $id_plant_number = 1;
} elseif ($id_plant == 'Cilantro') {
    $id_plant_number = 2;
} elseif ($id_plant == 'Tomate Cherry') {
    $id_plant_number = 3;
}


echo $id_plant_number;
echo "</br>";
echo $temperature;
echo "</br>";
echo $humidity;
echo "</br>";
echo $irrigation_time_float;
echo "</br>";
echo "</br>";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $conn = mysqli_connect("127.0.0.1", "root", "", "vertical_onchard_utc6");

    echo $temperature;

    $insertSQL = "INSERT INTO planters(humidity, id_plant, irrigation_time, temperature) VALUES($humidity, $id_plant_number, $irrigation_time, $temperature)";

    if (($result = mysqli_query($conn, $insertSQL)) === false) {
        header("Location: ./Principal.php");
        die(mysqli_error($conn));
    }

    // $sql = $conn->prepare("INSERT INTO planters(humidity, id_plant, irrigation_time, temperature) VALUES(?,?,?,?)");
    // $sql->bind_param('didd', $humidity, $id_plant_number, $irrigation_time_float, $temperature);
    // $sql->execute();

    // if ($sql->fetch()) {
    //     header("Location: ./Principal.php");
    //     exit();
    // } else {
    //     echo "<p>Hola bola</p>";
    //     echo "<script>alert('Error al registrar el riego: " . $conn . "');</script>";
    // }
}
?>