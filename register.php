<?php header('Content-type: text/plain; charset=utf-8');
    $requestSuccess = false;
    if($_POST) {

        $name = trim($_POST['name']);
        $phone = trim($_POST['phone']);
        $email = trim('info@christopherellinor.se');
        $participates = trim($_POST['participates']) == 'yes' ? 'Ja' : 'Nej';
        $drink = trim($_POST['phone']);
        $msg = trim($_POST['message']);

        $subject    =   "Subject: =?UTF-8?Q?".imap_8bit("OSA från webb - " . $name)."?=";

        $my_address =   "info@christopherellinor.se";
        $headers    =   "From: ChristopherEllinor.se \r\n".
                        "Reply-to: " . $email . "\r\n".
                        "Content-Type: text/html; charset=UTF-8";
        $message =  "Namn: $name <br>". 
                    "Deltar: $participates <br>".
                    "Telefon: $phone<br>".
                    "Dryck: " . nl2br($drink);
                    "Meddelande: " . nl2br($msg);

        $message .= "<br><br><br>Logga in på <a href='https://mail.one.com/'>mail.one.com</a> för att komma åt mailkontot" ; 

        $to = $email;
        
        mail($to, $subject, $message, $headers);
        $requestSuccess = true ;
    }
    $jsonArray = array ('success' => $requestSuccess) ;
    echo json_encode($jsonArray);
?>