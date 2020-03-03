<?php 
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	if (mail("rogovsergey2005@gmail.com", "Заявка на работу", "имя:" . $name . ", " . $message,"From:". $email . "\r\n")) {
		echo "Сообщение отправлено";
	};
?>