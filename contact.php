<?php
// Destinataire
$to = "destinataire_email@gmail.com"; // Remplacez par l'adresse du destinataire

// Sujet
$subject = "Test d'envoi d'email via PHP";

// Message
$message = "
<html>
<head>
  <title>Test d'envoi d'email</title>
</head>
<body>
  <h1>Ceci est un e-mail de test</h1>
  <p>Envoyé avec la fonction mail() de PHP.</p>
</body>
</html>
";

// En-têtes
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: votre_email@gmail.com" . "\r\n"; // Remplacez par votre email Gmail

// Envoi de l'email
if (mail($to, $subject, $message, $headers)) {
    echo "E-mail envoyé avec succès.";
} else {
    echo "L'envoi de l'e-mail a échoué.";
}
?>
