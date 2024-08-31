<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    // Configura los detalles del correo
    $destinatario = "edwingomezsantos1@gmail.com"; // Coloca tu dirección de correo aquí
    $asunto = "Mensaje desde el formulario de contacto";

    // Cuerpo del mensaje
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo: $correo\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Envía el correo
    $headers = "From: $correo"; // Email del remitente
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>
