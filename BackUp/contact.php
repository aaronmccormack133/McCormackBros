<?php

$to = "maron.accormack@gmail.com_";
$name = Trim(stripslashes($_POST['name']));
$email = Trim(stripslashes($_POST['email']));
$message = Trim(stripslashes($_POST['message']));

$body = "";
$body .= "Name: ";
$body .= $name;
$body .= "\n";

$body .= "Email: ";
$body .= $email;
$body .= "\n";

$body .= "Message: ";
$body .= $message;
$body .= "\n";


$go = mail($to, $subject, $body, "From: <$from>");
if($go){
	alert("Success");
}
else{
	alert("Unable to Send");
}

?>