let app=angular.module("myApp",['ngFileUpload']);



app.controller("formController",['$scope','userInsertionService','$window',function($scope,userInsertionService,$window) {
    $scope.firstName="";
    $scope.lastName="";
    $scope.userName="";
    $scope.address="";
    $scope.imageSource="php/files/profile.jpg";
    $scope.ImageDataURL="";
    $scope.isDisabled="disabled";
    $scope.array=[];
    $scope.userIdGlobal="";
    $scope.imageSource="php/files/profile.jpg";
    $scope.showImageSpan = false;
    $scope.check=true;


   $scope.submitButton=function(){

    if($scope.check){
        $scope.insertionDatabase();
    }
    else{
        console.log("update triggered");
        $scope.updateDatabase();
    }
   }

   $scope.updateDatabase=function(){
    console.log("user id is "+$scope.userIdGlobal);
    let userData={
        UserId:$scope.userIdGlobal,
        FirstName: $scope.firstName,
        LastName: $scope.lastName,
        UserName: $scope.userName,
        Email: $scope.email,
        Age: $scope.age,
        Number:  $scope.phoneNumber,
        Address:  $scope.address,
        Password:  $scope.password,
        ImageUrl:  $scope.ImageDataURL


    };

    userInsertionService.sendUpdateInfo(JSON.stringify(userData));
    $window.location.reload();


   
    
   }


   $scope.loadData=function(){
   
    userInsertionService.fetchData(function (r){
        $scope.fetchedData=r;
        console.log($scope.fetchedData[0]['imagebase']);
      // console.log($scope.fetchedData[9]);


    });
    

   }

        
      
    
    $scope.loadData(); 

    $scope.verify=function (){
        if($scope.array[0]==1 && $scope.array[1]==1 && $scope.array[2]==1 && $scope.array[3]==1 && $scope.array[4]==1 && $scope.array[5]==1 && $scope.array[6]==1 && $scope.array[7]==1 && $scope.array[8]==1){


            $scope.isDisabled="";
        }
        else{
            $scope.isDisabled="disabled";

        }

    }
    $scope.insertionDatabase=function(){

        let userData={
            FirstName: $scope.firstName,
            LastName: $scope.lastName,
            UserName: $scope.userName,
            Email: $scope.email,
            Age: $scope.age,
            Number:  $scope.phoneNumber,
            Address:  $scope.address,
            Password:  $scope.password,
            ImageUrl:  $scope.ImageDataURL

        };
        userInsertionService.insertEmployee(JSON.stringify(userData));
        $window.location.reload();
       
    
       }

    $scope.clearInputFields=function(){
        $scope.firstName="";
        $scope.lastName="";
        $scope.userName="";
        $scope.age="";
        $scope.email="";
        $scope.phoneNumber="";
        $scope.address="";
        $scope.password="";
        $scope.imageSource="php/files/profile.jpg";

        for(let i=0;i<9;i++){
            $scope.array[i]=0;
        }
        $scope.verify();
    }

   


            //first Name 

    $scope.firstNameVerify = function() {
        const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
       

        if ($scope.firstName =="") {
            $scope.spanFirstNameVisibility = 'hidden';
            $scope.firstNameBorderColor = '';
            $scope.array[0]=0; 
            $scope.verify();
        } else {
            let firstNameResult = nameRegex.test($scope.firstName);

            if (firstNameResult) {
                $scope.spanFirstNameVisibility = 'hidden';
                $scope.firstNameBorderColor = '';
                $scope.array[0]=1; 
                $scope.verify();
            } else {
              //  console.log("This is not a valid first name");
                $scope.spanFirstNameVisibility = 'visible';
                $scope.firstNameBorderColor = 'red';
                $scope.array[0]=0; 
                $scope.verify();
            }
        }
    };

            //last Name

    $scope.lastNameVerify= function(){
        const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
        if ($scope.lastName =="") {
            $scope.spanLastNameVisibility = 'hidden';
            $scope.lastNameBorderColor = '';
            $scope.array[1]=0;
            $scope.verify();
        } else {
            let lastNameResult = nameRegex.test($scope.lastName);

            if (lastNameResult) {
                $scope.spanLastNameVisibility = 'hidden';
                $scope.lastNameBorderColor = '';
                $scope.array[1]=1;
                $scope.verify();
            } else {
               // console.log("This is not a valid last name");
                $scope.spanLastNameVisibility = 'visible';
                $scope.lastNameBorderColor = 'red';
                $scope.array[1]=0;
                $scope.verify();
            }
        }

    };
        //user Name
        $scope.userNameVerify= function(){
            const userNameRegx=/^[a-zA-Z0-9_]+$/;
            if ($scope.userName =="") {
                $scope.spanUserNameVisibility = 'hidden';
                $scope.userNameBorderColor = '';
                $scope.array[2]=0;
                $scope.verify();
            } else {
                let userNameResult = userNameRegx.test($scope.userName);
    
                if (userNameResult) {
                    $scope.spanUserNameVisibility = 'hidden';
                    $scope.userNameBorderColor = '';
                    $scope.array[2]=1;
                    $scope.verify();
                } else {
                   // console.log("This is not a valid user name");
                    $scope.spanUserNameVisibility = 'visible';
                    $scope.userNameBorderColor = 'red';
                    $scope.array[2]=0;
                    $scope.verify();
                }
            }
    
        };
            //email verify

        $scope.emailVerify= function(){
            const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
            if ($scope.email =="") {
                $scope.spanEmailVisibility = 'hidden';
                $scope.emailBorderColor = '';
                $scope.array[3]=0;
                $scope.verify();
            } else {
                let emailResult = emailRegex.test($scope.email);
    
                if (emailResult) {
                    $scope.spanEmailVisibility = 'hidden';
                    $scope.emailBorderColor = '';
                    $scope.array[3]=1;
                    $scope.verify();
                } else {
                   // console.log("This is not a valid email id");
                    $scope.spanEmailVisibility = 'visible';
                    $scope.emailBorderColor = 'red';
                    $scope.array[3]=0;
                    $scope.verify();
                }
            }
    
        };

         //age verify

         $scope.ageVerify= function(){
            
            if ($scope.age =="") {
               // console.log("Age box is empty");
                $scope.spanAgeVisibility = 'hidden';
                $scope.ageBorderColor = '';
                $scope.array[4]=0;
                $scope.verify();
            } else {
                
    
                if ($scope.age<18 || $scope.age>50) {
                   // console.log("This is not a valid age");
                    $scope.spanAgeVisibility = 'visible';
                    $scope.ageBorderColor = 'red';
                    $scope.array[4]=0;
                    $scope.verify();
                } else {
                   // console.log("Valid age");
                    
                    $scope.spanAgeVisibility = 'hidden';
                    $scope.ageBorderColor = '';
                    $scope.array[4]=1;
                    $scope.verify();
                }
            }
    
        };

        //phone number

        $scope.phoneNumberVerify= function(){

            const phoneNumberRegx=/^01[3-9][0-9]{8}$/;
            
           if ($scope.phoneNumber =="") {
                $scope.spanPhoneNumberVisibility = 'hidden';
                $scope.phoneNumberBorderColor = '';
                $scope.array[5]=0;
                $scope.verify();
            
            } else {
                let phoneNumberResult = phoneNumberRegx.test($scope.phoneNumber);
    
                if (phoneNumberResult) {
                    $scope.spanPhoneNumberVisibility = 'hidden';
                    $scope.phoneNumberBorderColor = '';
                    $scope.array[5]=1;
                    $scope.verify();
                } else {
                    $scope.spanPhoneNumberVisibility = 'visible';
                    $scope.phoneNumberBorderColor = 'red';
                    $scope.array[5]=0;
                    $scope.verify();
                }
            }
    
        };
  
        // address

        $scope.addressVerify= function(){
                if($scope.address==""){
                    $scope.spanAddressVisibility='visible';
                    $scope.addressBorderColor='red';
                    $scope.array[6]=0;
                    $scope.verify();
                }
                else{
                    $scope.spanAddressVisibility='hidden';
                    $scope.addressBorderColor='';
                    $scope.array[6]=1;
                    $scope.verify();

                }
                //age verify

        };
     
            //password verify

        $scope.passwordVerify=function(){
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,11}$)/;

              
           if ($scope.password =="") {
            $scope.spanPasswordVisibility = 'none';
            $scope.passwordBorderColor = '';
            $scope.array[7]=0;
            $scope.verify();
        
        } else {
            let passwordResult = passwordRegex.test($scope.password);

            if (passwordResult) {
                $scope.spanPasswordVisibility = 'none';
                $scope.passwordBorderColor = '';
                $scope.array[7]=1;
                $scope.verify();
            } else {
                $scope.spanPasswordVisibility = 'block';
                $scope.passwordBorderColor = 'red';
                $scope.array[7]=0;
                $scope.verify();
            }
        }
            


        };

        $scope.deleteButton=function(personId){
            let a=confirm("Are you sure you want to delete it?");

            if(a){
                let deleteId={
                    Id:personId
                };
    
                userInsertionService.deleteInfo(JSON.stringify(deleteId));
                $window.location.reload();

            }
            else{
                alert("delete operation canceled");
            }

        
        

        }
        
        $scope.updateButton=function(personId){
            $scope.check=false;

            let updateId={
                Id:personId,
            };
            userInsertionService.updateUserInfo(JSON.stringify(updateId),function(r){

                $scope.updateUserInformationBox=r;
                console.log($scope.updateUserInformationBox);

                $scope.firstName=$scope.updateUserInformationBox[0].FirstName;
                $scope.lastName=$scope.updateUserInformationBox[0].LastName;
                $scope.userName=$scope.updateUserInformationBox[0].UserName;
                $scope.email=$scope.updateUserInformationBox[0].Email;
                let Age=+$scope.updateUserInformationBox[0].Age;
                $scope.age=Age;
                $scope.phoneNumber=$scope.updateUserInformationBox[0].PhoneNumber;
                $scope.address=$scope.updateUserInformationBox[0].Address;
                $scope.password=$scope.updateUserInformationBox[0].UserPassword;
                $scope.userIdGlobal=$scope.updateUserInformationBox[0].Personid;
                $scope.imageSource=$scope.updateUserInformationBox[0].imagebase;
        
                
                console.log($scope.firstName);
                console.log($scope.imageSource);
                for(let i=0;i<9;i++){
                    $scope.array[i]=1;
                }
        
                $scope.verify();



            });
            
          


            
        }
   
        $scope.newImageUpdate = function ($files) {

            console.log("triggered");
            let inputFile = document.getElementById("imageUpdate");
        
        
            if (inputFile.files && inputFile.files.length > 0) {
                let size = parseFloat(inputFile.files[0].size);
                let maxSizeKB = 100;
                let maxSize = maxSizeKB * 1024;
        
                if (size < maxSize) {
                    $scope.showImageSpan = false;
                    $scope.array[8]=1;
                    $scope.verify();
                    if (inputFile.files.length > 0) {
                        $scope.imageSource = URL.createObjectURL(inputFile.files[0]);
        
                        let file = inputFile.files[0];
                        if (file) {
                            let reader = new FileReader();
                            reader.onload = function (e) {
                                let imageDataURL = e.target.result;
                                console.log(imageDataURL);
                               // const a=imageDataURL.split(",")[1];
                               // console.log("a is "+a);
                               // console.log(imageDataURL);
                                $scope.ImageDataURL=imageDataURL;
                              
                            };
                            reader.readAsDataURL(file);
                        }
                    } else {
                        $scope.imageSource = "";
                        $scope.array[8]=0;
                        $scope.verify();
                    }
                } else {
                    $scope.showImageSpan = true;
                    $scope.imageSource = "php/files/profile.jpg";
                    $scope.array[8]=0;
                    $scope.verify();
                }
            }
        };
    
        
    }]);

    app.service('userInsertionService',['$http','$log',function($http,$log){

        this.insertEmployee=function(empDetails){
            $http({
                method: 'POST',
                url:  "http://localhost/crudJs/php/userService.php?service=saveUser",
                data: empDetails,
                headers: {'Content-Type': 'application/json'}
              
    
            }).then(
                function(response){ 
                    //on success
                console.log("UserData sent succesfully");
    
                },
                function(response){
                        //if faliure occurs
                        $log.error("ERROR OCCURRED");
            
                });
    
        };

        this.fetchData=function(cb){

            $http({
                method: 'GET',
                url:  "http://localhost/crudJs/php/userService.php?service=readUser",
                headers: {'Content-Type': 'application/json'}
              
    
            }).then(
                function(response){
    
        
                cb(response.data.userArray);
    
                },
                function(response){
                        //if faliure occurs
                        $log.error("ERROR OCCURRED");
            
                });
           
        };

        this.updateUserInfo=function(id,cb){
            
            $http({
                method: 'POST',
                url:  "http://localhost/crudJs/php/userService.php?service=updateUser",
                data: id,
                headers: {'Content-Type': 'application/json'}
              
    
            }).then(
                function(response){ 
                    
                    cb(response.data.userInformation);
    
                },
                function(response){
                        //if faliure occurs
                        $log.error("ERROR OCCURRED");
            
                });


        };
        
        this.sendUpdateInfo=function(userdetails){
            
            $http({
                method: 'POST',
                url:  "http://localhost/crudJs/php/userService.php?service=updateUserDone",
                data: userdetails,
                headers: {'Content-Type': 'application/json'}
              
    
            }).then(
                function(response){ 
                    
                  console.log("done");
    
                },
                function(response){
                        //if faliure occurs
                        $log.error("ERROR OCCURRED");
            
                });


        };
        this.deleteInfo=function(id){
            
            $http({
                method: 'POST',
                url:  "http://localhost/crudJs/php/userService.php?service=deleteUser",
                data: id,
                headers: {'Content-Type': 'application/json'}
              
    
            }).then(
                function(response){ 
                    
                  console.log("done");
    
                },
                function(response){
                        //if faliure occurs
                        $log.error("ERROR OCCURRED");
            
                });


        };

    
    }]);