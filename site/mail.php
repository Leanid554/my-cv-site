<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "leanid.sushchynski@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'];

    mail($to, $subject, $message, $headers);
    // Дополнительные действия после отправки сообщения, например, перенаправление на другую страницу или отображение сообщения об успешной отправке.
}
?>

