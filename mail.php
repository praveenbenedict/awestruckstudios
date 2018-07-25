<?php
	error_reporting(0);
	if(isset($_POST['submit'])){
		$firstname=$_POST['firstname'];
		$lastname=$_POST['lastname'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$ename=$_POST['eventname'];
		$venue=$_POST['address'];
		$date=$_POST['date'];
		// $time=$_POST['time'];

		$to2 = 'jbapraveen@hotmail.com';
		$to = $email;
		$subject="BOOKING SUCCESS FOR AWESTRUCK STUDIOS";
		$subject2="BOOKING";
		$message="Congrats,\r\n             
		Thank you for booking AWESTRUCK STUDIOS.
		 \r\n\r\n EVENT DETAILS:\r\n\r\n NAME :$firstname $lastname
		  \r\n EVENT NAME : $ename \r\n VENUE : $venue \r\n DATE : $date\r\n 
		  EMAIL ID:$email \r\n TIME:";


		$message2="Hola,\r\n        
			 We have a booking for the following event. \r\n\r\n
			  BOOKIE DETAILS:\r\n\r\n NAME :$firstname $lastname \r\n 
			  EVENT NAME : $ename \r\n VENUE : $venue \r\n DATE : $date\r\n 
			  EMAIL ID:$email \r\n TIME:";
		$headers='From: awestruckscrew@gmail.com' . "\r\n" .
		mail($to, $subject, $message,$headers);
		mail($to2, $subject2, $message2);
	   echo "<script>alert('THANK YOU FOR BOOKING US!!!');</script>";
	}
?>