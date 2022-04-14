<?php

//Connect to database
$conn = mysqli_connect('localhost','root', 'root', 'ajaxtest');

$query = "SELECT * FROM users";

//Get result
$result = mysqli_query($conn, $query);

//Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

//Take our result and put into json format
echo json_encode($users);