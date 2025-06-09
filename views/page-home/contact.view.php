<?php // Contact me form that will send myself and email ?>

<div>

  <div class="contact-info">
    <h2>Get in Touch</h2>
    <p>For custom websites or engineering services. Use contact form or send a query direct to my email.</p>
    <a href="mailto:email@domain.com">email@domain.com</a>
  </div>

  <form class="contact-form" action="/" method="POST">

    <input class="required" id="contact-form-name-first" name="contact-form-name-first" type="text" placeholder="First Name*">

    <input class="required" id="ccontact-form-name-last" name="contact-form-name-last" type="text" placeholder="Last Name*">

    <input class="required" id="contact-form-email" name="contact-form-email" type="email" placeholder="Email Address*">

    <input id="contact-form-subject" name="contact-form-subject" type="text" placeholder="Subject">

    <textarea id="contact-form-message" name="contact-form-message" placeholder="Message"></textarea>

    <input type="submit">

  </form>

</div>