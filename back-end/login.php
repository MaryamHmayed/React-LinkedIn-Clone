<?php
include("connection.php");

$email=$_POST["email"];
$pass=$_POST["password"];

$query = $mysqli->prepare('select * from users where email=?');
$query->bind_param('s', $email);
$query->execute();

$query->store_result();
$query->bind_result($user_id, $email, $hashed_password,$is_company);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($pass, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['user_id'] = $user_id;
        $response['email'] = $email;
        $response['is_company'] = $is_company;

        
    } else {
        $response['status'] = "wrong password";
    }
}
echo json_encode($response);
