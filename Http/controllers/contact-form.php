<?php

use Core\App;
use Core\Database;
use Core\Validator;
use Core\Mailer;

$db = App::resolve(Database::class);

$nameFirst = $_POST['contact-me-form-name-first'];
$nameLast = $_POST['contact-me-form-name-last'];
$email = $_POST['contact-me-form-email'];
$subject = $_POST['contact-me-form-subject'];
$message = $_POST['contact-me-form-message'];

$errors = [];
// Only validating the required fields
if (!Validator::string($nameFirst)) {
  $errors['name-first'] = "Your First Name is required to send enquiry.";
}
if (!Validator::string($nameLast)) {
  $errors['name-last'] = "Your Last Name is required to send enquiry.";
}
if (!Validator::email($email)) {
  $errors["email"] = "Your Email is not formatted correctly";
}

// Return if there are errors
if (!empty($errors)) {
  return view('index.view.php', [
    'errors'=> $errors
  ]);
}

$db->query("INSERT INTO `contact_form` (
    `created_at`,
    `name_first`,
    `name_last`,
    `email`,
    `subject`,
    `message`
  ) VALUES (
    DEFAULT,
    :nameFirst,
    :nameLast,
    :email,
    :subject,
    :message
  )", [
    'nameFirst' => $nameFirst,
    'nameLast' => $nameLast,
    'email' => $email,
    'subject' => $subject,
    'message' => $message
]);

$mailer = New Mailer();
$mailer->subject = $subject;
$mailer->body = $message;
$mailer->sendToSelf($email, $nameFirst . $nameLast);

return view('index.view.php', [
  'confirmation' => 'Your enquiry has been submitted'
]);
