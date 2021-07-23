<?php
  
    
        //Email information
        $admin_email = "manolis@casavasilia.com";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $from = $_POST['from'];
        $to = $_POST['to'];
        $people = $_POST['people'];

        $message = $_POST['message'];


		$public_key="6LehH6sUAAAAALyW50OZbQ4HUsBLoSfuWSA9hzT_";
		$private_key="6LehH6sUAAAAACNFU0kqnNl-T_4IqZ55XRiMUhfl";
		$url="https://www.google.com/recaptcha/api/siteverify";
		
		/* Check if the form has been submitted */
		if(array_key_exists('submit_form',$_POST))
		{
			/* The response given by the form being submitted */
			$response_key = $_POST['g-recaptcha-response'];
			/* Send the data to the API for a response */
			$response = file_get_contents($url.'?secret='.$private_key.'&response='.$response_key.'&remoteip='.$_SERVER['REMOTE_ADDR']);
			/* json decode the response to an object */
			$response = json_decode($response);

			/* if success */
			if($response->success == 1)
			{
					 //send email
        mail($admin_email, "CASA-VASILIA `New Form Submission`","From : " . $email . "\r\n\n" ."Fullname : " . $name ."\r\n\n" . 'Message : ' . $message . "\r\n\n" . 'Phone-number : ' . $phone ."\r\n\n" . "Check-in-date : " . $from . "\r\n\n"  . "Check-out-date : " . $to . "\r\n\n" ."Total-number-of-people : " . $people);

        header('Location: https://www.casavasilia.com/success.html');
		
			}
			else
			{
				echo "You are a robot and we don't like robots.";
			}
			
		}
		
		
       	

    
