<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
            $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $tel = trim($_POST["tel"]);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = strip_tags(trim($_POST["message"]));

        $recipient = "hola@centralcomunicacion.com";

        $subject = "Nuevo formulario de Central Comunicación";

        $email_content  = "<style type='text/css'>html, body {margin: 0px;padding: 0px;}html,body,p,h1,h2,h3,h4,h5,h6 {font-family: 'HelveticaNeueLTStd-Ex', Helvetica,Arial,sans-serif !important;}p{font-size:12px;}</style>\n";
        $email_content .= "<img src='http://centralcomunicacion.com/assets/img/logo.jpg' style='max-width:120px;width:120px;display:block;margin:30px auto;width:60%;height:auto;' title='Central Comunicación' />\n";
        $email_content .= "<div style='max-width:550px;width:75%;display:block;margin:0 auto;background-color:#fff;box-shadow: 0px 1px 5px rgba(0,0,0,0.63);padding:15px 4% 5em;border-top: 10px solid #D28B15;position:relative;'>\n";
        $email_content .= "<h2 style='padding:15px 0px;text-align:left;margin:0 auto;color: #063346;font-weight:800;word-break: break-all;'>Hola!</h2>\n";
        $email_content .= "<p style='color:#121212;text-align:left;'>Nombre: $name\n</p>";
        $email_content .= "<p style='color:#121212;text-align:left;'>Teléfono: $tel\n\n</p>";
        $email_content .= "<p style='color:#121212;text-align:left;'>Correo Electrónico: $email\n\n</p>";
        $email_content .= "<br>";
        $email_content .= "<hr> <br>";
        $email_content .= "<p style='color:#121212;text-align:left;padding: 0px 1.25em;'> $message\n\n </p><br>";
        $email_content .= "<hr> <br>";
        $email_content .= "<br>";
        $email_content .= "Fecha:     ".date("d/m/Y")."\n\n<br>";
        $email_content .= "Hora:      ".date("h:i:s a")."\n\n<br>";
        $email_content .= "IP:        ".$_SERVER['REMOTE_ADDR']."\n\n<br>";
        $email_content .= "User Agent: ".$_SERVER['HTTP_USER_AGENT']."\n\n<br><br><br>";
        $email_content .= "<p style='text-align: right;font-size: 0.85em;margin: 0px auto;color: #fff;position: absolute;bottom: 0;left: 0%;right: 0;padding: 0.7em 1em 0.7em 1em;background-color: #2F2F2F;float: left;width: auto;max-width: 100%;display: block;word-spacing: 0.11em;'>Esto es una notificación automatizada. No es necesario hacer nada más. Made by <a href='http://izignamx.com/'>IzignaMx.</a></p></div>\n";

        $email_headers  = "From: $email\r\n";
        $email_headers .= "MIME-Version: 1.0\r\n";
        $email_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Gracias! Su mensaje ha sido enviado.";
        } else {
            http_response_code(500);
            echo "Oops! Ha ocurrido un error al enviar sus datos.(500)";
        }

    } else {
        http_response_code(403);
        echo "Hay un problema con su envío, por favor intente de nuevo.(403)";
    }

?>
