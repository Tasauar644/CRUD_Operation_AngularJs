<?php


require_once 'connection.php';
require_once 'user.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");
/*echo '<pre>';
print_r($_GET);
die();*/

/*$jsonUserData=$_POST['userData'];

$userData=json_decode($jsonUserData,true);
if($userData==null){
    echo "Nothing inside";
}
else{
    $firstName=$userData["firstName"];
    echo $firstName;
}*/

//print_r($_FILES);

$user = new User();







        if (isset($_GET["service"])) {  

    $serviceName=$_GET["service"];

    switch($serviceName){
    case "saveUser"  :       $user->saveUser();
                             break;
    case "updateUser":       $user->updateUserInformation();
                             break;
    case "updateUserDone":   $user->updateUser();
                             break;
    case "readUser"  :       $user->readUser();
                             break;
    case "deleteUser":       $user->deleteUser();
                             break;
    default          :       echo "No operation was selected";
                             break;
        }
    
    } 
        else {
           return 0;
        }












?>