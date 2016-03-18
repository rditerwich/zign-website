<?php

      if($_POST['name']) {
        $name=$_POST['name'];
      }
      if($_POST['email']) {
        $email=$_POST['email'];
      }
      if($_POST['phone']) {
        $phone=$_POST['phone'];
      }
      if($_POST['message']) {
        $message=$_POST['message'];
        if($phone) {
          $message = $message . "\n\nContact Phone: " . $phone;
        }
      }

        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Contact via ZIGN website";

        if($name && $email && $phone && $message) {
          mail("cristif3@gmail.com", $subject, $message, $from);
        }


?>
