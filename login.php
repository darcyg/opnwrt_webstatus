<?php

if( session_id() == null ) { session_start(); }

if (isset($_GET['logout'])) {
	setcookie("authentication", null, time()-1 , "/" , ".".preg_replace('/^www\./','', $host));
	session_destroy();
	$loggedin = false ;
	header("Location: ". $_SERVER['HTTP_REFERER']);
	return;
}

if ($_SESSION['authenticated'] == true) {
	$loggedin = true; 
	return; 
}
else {
	$logincookie = explode(' ', $_COOKIE["authentication"] );
	if ( checkuser($logincookie[0], $logincookie[1]) == true ) {
		$_SESSION['authenticated'] = true;
		$loggedin = true;
		return;
	}
	else {
		$loggedin = false ;
	}
}

$username = $_POST["username"];
$password = sha1($_POST["password"]);
$logininfo = $username." ".$password;

if (!empty($_POST)){
	if ( checkuser($username, $password) == true ) {   
		$_SESSION['authenticated'] = true;
		$loggedin = true ;
		if (isset($_POST['remember'])) { setcookie("authentication", $logininfo, time()+60*60*24*30 , "/" , ".".preg_replace('/^www\./','', $host)); }
		header("Location: ". $_SERVER['HTTP_REFERER']);
	}
	else {
		$error = 'Incorrect username or password';
		$loggedin = false ;
	}
}

function checkuser($username, $password){
	$con = mysql_connect("localhost","djdeeles","051984");

	if(! $con)
	{
		die('Connection Failed'.mysql_error());
	}

	mysql_select_db("status",$con);

	$query="SELECT * FROM Users WHERE user='$username' AND password='$password' AND active=true";
	$result=mysql_query($query,$con);
	if(mysql_num_rows($result))
		return true;
	else
		return false;
}

/*
if( session_id() == null ) { session_start(); }

if (isset($_GET['logout'])) {
	setcookie("authentication", null, time()-1);
	session_destroy();
	$loggedin = false ;
	header("Location: ". $_SERVER['HTTP_REFERER']);
	return;
}

$secretusername = "root";
$secretpassword = "051984";
$logininfo = sha1(secretusername&secretpassword);

if ($_SESSION['authenticated'] == true ) { 
	$loggedin = true; 
	return; 
}
else if ($_COOKIE["authentication"] == $logininfo ) {
	$_SESSION['authenticated'] = true;
	$loggedin = true;
	return;
} 

if (!empty($_POST)){
	if ($_POST['username'] == $secretusername && $_POST['password'] == $secretpassword ) {   
		$_SESSION['authenticated'] = true;
		$loggedin = true ;
		if (isset($_POST['remember'])) { setcookie("authentication", $logininfo, time()+60*60*24*30 , "/" , ".".preg_replace('/^www\./','', $host)); }
		header("Location: ". $_SERVER['HTTP_REFERER']);
	}
	else {
		$error = 'Incorrect username or password';
		$loggedin = false ;
	}
}

*/
?>