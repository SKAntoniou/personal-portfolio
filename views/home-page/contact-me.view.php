<div class="fullscreen-page" id="contact-me-section">

  <div class="contact-me container">
    <div class="contact-me-status">

      <?php if(!empty($confirmation)) : ?>
        <div class="sent">
          <h3><?= $confirmation ?></h3>
        </div>
      <?php endif; ?>

      <?php if(!empty($errors)): ?>
        <?php foreach($errors as $error): ?>
          <div class="error">
            <h3><?= $error ?></h3>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>

    </div>
    <div class="contact-me-container">
      <div class="contact-me-info">
        <h2>Get in Touch</h2>
        <p>For custom websites or engineering services. Use contact form or send a query direct to my email.</p>
        <a href="mailto:email@domain.com">email@domain.com</a>
      </div>

      <form class="contact-me-form" action="/" method="POST">

        <input class="contact-me-form-input required" id="contact-me-form-name-first" name="contact-me-form-name-first" type="text" placeholder="First Name*">

        <input class="contact-me-form-input required" id="contact-me-form-name-last" name="contact-me-form-name-last" type="text" placeholder="Last Name*">

        <input class="contact-me-form-input required" id="contact-me-form-email" name="contact-me-form-email" type="email" placeholder="Email Address*">

        <input class="contact-me-form-input" id="contact-me-form-subject" name="contact-me-form-subject" type="text" placeholder="Subject">

        <textarea class="contact-me-form-input" id="contact-me-form-message" name="contact-me-form-message" placeholder="Message"></textarea>

        <input id="contact-me-form-submit" type="submit">

      </form>
    </div>

  </div>

  <footer>

    <a href="#" class="footer-top">
      <span class="icon-keyboard_arrow_up"></span>
      <span>Back to Top</span>
    </a>

    <div class="footer-bottom">
      <a href="#">Site Map</a>
    </div>
  </footer>

</div>