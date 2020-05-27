<?php 
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message
	$headers  = "From: " . strip_tags($email) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/plain;charset=utf-8 \r\n";
	if (mail("rogovsergey2005@gmail.com", "Заявка на работу", "имя:" \n . $name . ", " . $message, $headers)) {
		echo "Сообщение отправлено";
	};
?>
