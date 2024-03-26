<?php
include('connection.php');


$user_id = $_POST["user_id"];
$content= $_POST["content"]; 


$query = $mysqli->prepare("insert into tasks (content,user_id) VALUES (?, ?)");
$query->bind_param('si', $content, $user_id); 
$query->execute();

if ($query) {
    $response['status'] = 'success';
    $response['message'] = 'post added successfully';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Failed to add post';
}

echo json_encode($response);