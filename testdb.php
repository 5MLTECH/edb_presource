<?php 
	


	
 	define ( "DB_PLATFORM", 	"mysql" );
 	define ( "DB_HOST", 		"psresource-db-edb.hkedcity.net" );
	define ( "DB_USERNAME",		"psresource" );
 	define ( "DB_PASSWORD", 	"U8SZ&Iatj5#i" );
    define ( "DB_INSTANCE", 	"psresource" );




	global $pdo;
	try {
		$dbHost = DB_HOST;
		$dbDatabase = DB_INSTANCE;
		$dbUser =DB_USERNAME;
		$dbPassword = DB_PASSWORD;
		$pdo = new PDO("mysql:host=$dbHost;dbname=$dbDatabase;port=3306", $dbUser, $dbPassword);
		$pdo->exec("set names utf8mb4");
	}catch(PDOException $e) { 
		echo $e->getMessage();
	}
	
	
	var_dump($pdo);
	
	
	
?>
