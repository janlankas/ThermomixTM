<?php 
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $visitor_phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_from = 'lankascb@gmail.com';
    $email_subject = 'Nov8 zprava Vareni je poteseni';
    $email_body =   "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "User Message: $message.\n"


    $to = "lankascb@gmail.com";

    $headers = "From: $email_from \r\n"
    $headers .="Reply-To: $visitor_email \r\n"
    

    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
    ?>