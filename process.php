<?php

//Connect to database
$conn = mysqli_connect('localhost','root', 'root', 'ajaxtest');

echo 'processing...';

//Check for a post variables
if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    echo 'POST: Your Name is ' . $_POST['name'];

    $query = "INSERT INTO users(name) VALUES('$name')";
    if(mysqli_query($conn, $query)){
        echo 'User added...';
    }
    else{
        echo 'ERROR: ' . mysqli_errno($conn);
    }

}



//Check for a get variables
if(isset($_GET['name'])){
    echo 'GET: Your Name is ' . $_GET['name'];
}

