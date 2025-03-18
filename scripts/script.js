// Mobile Expanding Sidebar
const mobileHamburger = document.getElementById('sidenav-toggle');
const sidenav = document.getElementsByTagName('nav');

mobileHamburger.addEventListener('click', () => {
  sidenav[0].classList.toggle("nav-visible");
});


// Text Effect - Typewriter
const typewriterFrequency = 10; // Unit: Hz
const typewriterText = "I'm a Web Developer";
const typewriterLocation = document.getElementById('typewriter-banner');

{ // Curly brackets to reduce the scope so I can reuse "i" variable.
  let i = 0;
  const typewriterTextLength = typewriterText.length // Just so it doesn't have to calculate this every time. Should in theory speed up things a tad. 
  setInterval( () => {
    if (i < typewriterTextLength) {
      // Doesn't wait after printing a space. Just looks weird waiting for spaces.
      if (typewriterText.charAt(i) === ' ') {
        typewriterLocation.innerHTML += typewriterText.charAt(i);
        i++;
        if (i < typewriterTextLength) { 
          typewriterLocation.innerHTML += typewriterText.charAt(i);
          i++;
        }
      } else {
        typewriterLocation.innerHTML += typewriterText.charAt(i);
        i++;
      }
    }
  }, (1000 / typewriterFrequency))
}

// Contact Form Validation
const contactFormFirstName = document.getElementById( 'contact-me-form-name-first' );
contactFormFirstName.isVerified = false;
const contactFormLastName = document.getElementById( 'contact-me-form-name-last' );
contactFormLastName.isVerified = false;
const contactFormEmail = document.getElementById( 'contact-me-form-email' );
contactFormEmail.isVerified = false;
const contactFormSubmitButton = document.getElementById( 'contact-me-form-submit' );
const contactFormEventsToWatch = ['focusout', 'change'];
const contactFormBasicFieldsToWatch = [contactFormFirstName, contactFormLastName];
const contactFormAllFieldsToVerify = [...contactFormBasicFieldsToWatch, contactFormEmail];

contactFormEventsToWatch.forEach( (event) => {

  contactFormBasicFieldsToWatch.forEach ( (field) => {

    field.addEventListener(event, () => {
      if (field.value === '') {
        field.classList.add("contact-me-required-missing");
        field.isVerified = false;
        contactFormSubmitButton.setAttribute('disabled','true');
      } else {
        field.classList.remove("contact-me-required-missing");
        field.isVerified = true;
        if (verifyFormElements(contactFormAllFieldsToVerify)) {
          contactFormSubmitButton.removeAttribute('disabled');
        } else {
          contactFormSubmitButton.setAttribute('disabled','true');
        }
      }
    });
  });

  const emailRegex = /^\S+@\S+\.\S+$/;

  contactFormEmail.addEventListener(event, () => {
    if (!emailRegex.test(contactFormEmail.value.toLowerCase())) {
      contactFormEmail.classList.add("contact-me-required-missing");
      contactFormEmail.isVerified = false;
      contactFormSubmitButton.setAttribute('disabled','true');
    } else {
      contactFormEmail.classList.remove("contact-me-required-missing");
      contactFormEmail.isVerified = true;
      if (verifyFormElements(contactFormAllFieldsToVerify)) {
        if (contactFormSubmitButton.disabled) {
          contactFormSubmitButton.removeAttribute('disabled');
        }
      } else {
        if (!contactFormSubmitButton.disabled) {
          contactFormSubmitButton.setAttribute('disabled','true');
        }
      }
    }
  });
});

function verifyFormElements(array) {
  for (let i = 0, length = array.length; i < length; i++) {
    if (!array[i].isVerified) {
      return false;
    }
  }
  return true;
}

// Light / Dark Mode Toggle
const lightDarkToggle = document.getElementById('light-dark-toggle');
lightDarkToggle.addEventListener("change", () => {
  for (let currentValue of lightDarkToggle.children) {
    if (currentValue.checked) {
      if (currentValue.id === 'toggle-light') {
        document.documentElement.setAttribute("data-theme", "light");
        // lightDarkToggle.classList.add(swit)
        break;
      } else if (currentValue.id === 'toggle-dark') {
        document.documentElement.setAttribute("data-theme", "dark");
        break;
      } else {
        document.documentElement.removeAttribute("data-theme");
        break;
      }
    }
  }
});

// Projects Hover Effect
const projectItems = document.getElementsByClassName('project-item');
const projectPreviews = document.getElementsByClassName('project-preview');

// Default setting
projectItems[0].classList.add("project-active");
projectPreviews[0].classList.add("project-active");

// Event listeners on all of them
for (let i = 0, j = projectItems.length; i < j; i++) {
  projectItems[i].addEventListener("mouseover", () => {
    projectItems[i].classList.add("project-active");
    projectPreviews[i].classList.add("project-active");
    for (let k = 0, l = projectItems.length; k < l; k++) {
      if ( k !== i) {
        projectItems[k].classList.remove("project-active");
        projectPreviews[k].classList.remove("project-active");
      }
    }
  });
}
