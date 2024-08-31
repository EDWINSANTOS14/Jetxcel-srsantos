<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = htmlspecialchars(trim($_POST['Nombre']), ENT_QUOTES, 'UTF-8');
    $telefono = htmlspecialchars(trim($_POST['Telefono']), ENT_QUOTES, 'UTF-8');
    $correo = filter_var(trim($_POST['Correo']), FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars(trim($_POST['mensaje']), ENT_QUOTES, 'UTF-8');

    // Validar los datos
    if (!empty($nombre) && !empty($telefono) && !empty($correo) && !empty($mensaje) && filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        // Crear una instancia de PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Configuración del servidor SMTP
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Servidor SMTP de Gmail
            $mail->SMTPAuth = true;
            $mail->Username = 'arialvelas@gmail.com'; // Tu dirección de correo electrónico
            $mail->Password = 'lssu prir dlln rgoq'; // Tu contraseña de aplicación
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Configuración del correo
            $mail->setFrom('arialvelas@gmail.com', 'JetXcel SAS'); // Dirección y nombre de tu empresa
            $mail->addAddress('arialvelas@gmail.com'); // Tu dirección de correo para recibir el mensaje

            // Configuración del mensaje
            $mail->isHTML(true); // Establecer el correo como HTML
            $mail->CharSet = 'UTF-8'; // Asegurarse de que la codificación sea UTF-8
            $mail->Subject = "Nuevo mensaje de contacto desde la página de JetXcel SAS";
            $mail->Body = "<h3>Nuevo mensaje de contacto desde la página de JetXcel SAS</h3>
                           <table border='1' cellpadding='10'>
                               <tr>
                                   <th>Nombre</th>
                                   <td>$nombre</td>
                               </tr>
                               <tr>
                                   <th>Teléfono</th>
                                   <td>$telefono</td>
                               </tr>
                               <tr>
                                   <th>Correo</th>
                                   <td>$correo</td>
                               </tr>
                               <tr>
                                   <th>Mensaje</th>
                                   <td>$mensaje</td>
                               </tr>
                           </table>";
            $mail->AltBody = "Has recibido un nuevo mensaje de contacto desde la página de JetXcel SAS.\n\n".
                             "Nombre: $nombre\n".
                             "Teléfono: $telefono\n".
                             "Correo: $correo\n\n".
                             "Mensaje:\n$mensaje\n";

            // Configurar el campo Reply-To para responder al remitente
            $mail->addReplyTo($correo, $nombre);

            // Enviar el correo
            $mail->send();
            header("Location: index.html"); // Redirigir después de enviar
            exit;
        } catch (Exception $e) {
            echo "Lo siento, hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde. Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Por favor, completa todos los campos correctamente.";
    }
} else {
    // Redirigir a la página principal si se intenta acceder al script directamente
    header("Location: index.html");
    exit;
}
?>