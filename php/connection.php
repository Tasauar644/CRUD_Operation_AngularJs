<?php

class database {


    private static $instance = null;
    private $host = 'localhost';
    private $dbname = 'crud';
    private $username = 'root'; 
    private $password = ''; 
    private $pdo;
    
    private function __construct() {
        try {
            $this->pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //    echo "Connected to the database successfully.";
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new database();
        }
 
        return self::$instance;
    }

    public  function getConnection() {
      //  echo"connection established";
        return $this->pdo;
    }
}






?>
