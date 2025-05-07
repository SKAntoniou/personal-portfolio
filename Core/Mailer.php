<?php 

namespace Core;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


class Mailer {

  protected $mail;
  protected $errors;

  public $subject;
  public $body;
  public $altBody;

  public function __construct() {

    $this->mail = new PHPMailer(true);

    $this->mail->isSMTP();
    $this->mail->Host = $_ENV['MAIL_HOST'];
    $this->mail->SMTPAuth = $_ENV['MAIL_SMTP_AUTH'];
    $this->mail->Username = $_ENV['MAIL_USERNAME'];
    $this->mail->Password = $_ENV['MAIL_PASSWORD'];
    $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $this->mail->Port = $_ENV['MAIL_PORT'];

  }

  public function send($fromAddress, $fromName, $toAddress, $toName) {

    $this->mail->setFrom($fromAddress, $fromName);
    $this->mail->addAddress($toAddress, $toName);

    $this->mail->isHTML(true);
    $this->mail->Subject = $this->subject ?? '';
    $this->mail->Body = $this->body ?? '';
    $this->mail->AltBody = $this->altBody ?? '';

    try {
      $this->mail->send();
      echo "Message has been sent successfully!";
    } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$this->mail->ErrorInfo}";
    }
  }

  public function sendToSelf($fromAddress, $fromName) {
    $this->send($fromAddress, $fromName, $_ENV['MAIL_MY_EMAIL'], $_ENV['MAIL_MY_NAME']);
  }

}