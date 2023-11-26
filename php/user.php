<?php


require_once 'userService.php';


//print_r($_FILES);

/*$jsonUserData=$_POST['userData'];

$userData=json_decode($jsonUserData,true);
if($userData==null){
    echo "Nothing inside";
}
else{
    $firstName=$userData["firstName"];
    echo $firstName;
}

print_r($_FILES);*/


class User
{

    private $connection;

    function __construct()
    {
        $this->connection = database::getInstance()->getConnection();
    }

    function saveUser()
    {


        //   $image=$_FILES["image"];
        // print_r($image);
        $postData = json_decode(file_get_contents('php://input'));

        echo "<pre>";
        $firstName=$postData->FirstName;
        $lastName=$postData->LastName;
        $userName=$postData->UserName;
        $email=$postData->Email;
        $age=$postData->Age;
        $phoneNumber=$postData->Number;
        $address=$postData->Address;
        $password=$postData->Password;
        $imageurl=$postData->ImageUrl;  
       // print_r($postData->FirstName);    
          
       $sql = "INSERT INTO users (FirstName, LastName, UserName, Email, Age, PhoneNumber, Address, UserPassword,imagebase) 
       VALUES (:firstName, :lastName, :userName, :email, :age, :phoneNumber, :address, :password,:image)";
       $stmt = $this->connection->prepare($sql);
       if ($stmt) {
                    
        $stmt->bindParam(':firstName', $firstName);
        $stmt->bindParam(':lastName', $lastName);
        $stmt->bindParam(':userName', $userName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':age', $age,);
        $stmt->bindParam(':phoneNumber', $phoneNumber);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':image',$imageurl);
        if ($stmt->execute()) {
            return 1;
        } else {
           return 0;
        }
    }
    else{
        return 0;
    }

}
    function readUser()
    {
        $sql = "SELECT * FROM users";
        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        $userArray = $stmt->fetchAll();
        $data = $userArray;
        $arrayLength = count($data);

        if ($userArray) {
            $response = array(
                'userArray' => $userArray,
                'arrayLength' => $arrayLength,
            );
            echo json_encode($response);
        } else {
            return 0;
        }





    }
    function updateUserInformation()
    {
    
        $postDataId  = json_decode(file_get_contents('php://input'));

        $id=$postDataId->Id;
    

      //  echo "Id received ".$id;
       $sql = "SELECT * FROM users WHERE Personid=$id";
        $stmt = $this->connection->prepare($sql);
        
        $stmt->execute();
 
        $userinformation = $stmt->fetchAll();
        if ($userinformation) {
            $response = array(
                'userInformation' => $userinformation,
            );
            echo json_encode($response);


        }
    }

    function updateUser()
    {
        $postData  = json_decode(file_get_contents('php://input'));
        if ($postData == null) {
               echo "Nothing inside";
        } else {
            if($postData->ImageUrl==null){
            $userID=$postData->UserId;
            $firstName=$postData->FirstName;
            $lastName=$postData->LastName;
            $userName=$postData->UserName;
            $email=$postData->Email;
            $age=$postData->Age;
            $phoneNumber=$postData->Number;
            $address=$postData->Address;
            $password=$postData->Password; 
            //$imageurl=$postData-> ImageUrl;

        

            $sql = "UPDATE users   SET FirstName='$firstName', LastName='$lastName', UserName='$userName', Email='$email', Age=$age, PhoneNumber='$phoneNumber', Address='$address', UserPassword='$password'
                        WHERE Personid= $userID";

            $stmt = $this->connection->prepare($sql);

            if ($stmt) {
                if ($stmt->execute()) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }

        else{
            $userID=$postData->UserId;
            $firstName=$postData->FirstName;
            $lastName=$postData->LastName;
            $userName=$postData->UserName;
            $email=$postData->Email;
            $age=$postData->Age;
            $phoneNumber=$postData->Number;
            $address=$postData->Address;
            $password=$postData->Password; 
            $imageurl=$postData-> ImageUrl;

        

            $sql = "UPDATE users   SET FirstName='$firstName', LastName='$lastName', UserName='$userName', Email='$email', Age=$age, PhoneNumber='$phoneNumber', Address='$address', UserPassword='$password',imagebase='$imageurl'
                        WHERE Personid= $userID";

            $stmt = $this->connection->prepare($sql);

            if ($stmt) {
                if ($stmt->execute()) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }


        }

         


        }




    }
    function deleteUser()
    {
        $postDataId  = json_decode(file_get_contents('php://input'));
        $id= $postDataId->Id;   

       // echo "the id is ".$id;

        $sql = "DELETE FROM users WHERE Personid=$id";
        $stmt = $this->connection->prepare($sql);
        if ($stmt->execute()) {

            return 1;
        } else {
            return 0;
        }

    }


}



?>