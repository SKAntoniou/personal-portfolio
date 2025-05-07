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
const contactForm = document.querySelector("form");
const requiredFields = contactForm.querySelectorAll(".required");
const emailRegex = /^\S+@\S+\.\S+$/;
requiredFields.forEach( (currentValue) => {
  if (currentValue.type === 'text' || currentValue.nodeName === 'TEXTAREA') {

    currentValue.addEventListener("focusout", () => {
      if (currentValue.value === "") {
        currentValue.classList.add("error");
      } else {
        currentValue.classList.remove("error");
      }
    });

  } else if (currentValue.type === 'email') {

    currentValue.addEventListener("focusout", () => {
      if (!emailRegex.test(currentValue.value.toLowerCase())) {
        currentValue.classList.add("error");
      } else {
        currentValue.classList.remove("error");
      }
    });
  }
});

// Form Submit
contactForm.addEventListener("submit", event => {
  let formValidArray = Array(requiredFields.length);
  formValidArray.forEach( (currentValue) => {
    currentValue = false;
  });

  requiredFields.forEach( (currentValue, index) => {
    if (currentValue.type === 'text' || currentValue.nodeName === 'TEXTAREA') {
      if (currentValue.value === "") {
        currentValue.classList.add("error");
        formValidArray[index] = false;
      } else {
        formValidArray[index] = true;
      }
    } else if (currentValue.type === 'email') {
      if (!emailRegex.test(currentValue.value.toLowerCase())) {
        currentValue.classList.add("error");
        formValidArray[index] = false;
      } else {
        formValidArray[index] = true;
      }
    }
  });

  let formValidCount = 0;
  formValidArray.forEach( (currentValue) => {
    if (currentValue) {
      formValidCount++;
    }
  });
  
  if (formValidCount !== requiredFields.length) {
    event.preventDefault();
  }
});

// Light / Dark Mode Toggle
const lightDarkToggle = document.getElementById('light-dark-toggle');
lightDarkToggle.addEventListener("change", () => {
  for (let currentValue of lightDarkToggle.children) {
    if (currentValue.checked) {
      if (currentValue.id === 'toggle-light') {
        document.documentElement.setAttribute("data-theme", "light");
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
