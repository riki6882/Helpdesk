<?php 
$metoda = $_SERVER['REQUEST_METHOD'];
if($metoda === 'POST'){
    $data = json_decode(file_get_contents('php://input'),true);
    
}