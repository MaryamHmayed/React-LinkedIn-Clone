<?php
include("connection.php");


$email=$_POST['email'];
$pass=$_POST['password'];

$check=$mysqli->prepare("SELECT email from users WHERE  email=?");
$check->bind_param("s",$email);
$check->execute();

$check->store_result();
$email_exists = $check->num_rows();

if ($email_exists == 0) {
    $hashed_password = password_hash($pass, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(email,password) values(?,?)');
    $query->bind_param('ss', $email, $hashed_password);
    $query->execute();

    $response['status'] = "success";
    $response['message'] = "another message in success";
} else {
    $response['status'] = "failed";
    $response['message'] = "another message in fail";
}


echo json_encode($response);