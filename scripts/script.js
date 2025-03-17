// // jQuery - Side-nav Hamburger Button
// const $mobileHamburger = $('#sidenav-toggle');
// const $sidenav = $('nav');

// $mobileHamburger.on('click', () => {
//   $sidenav.animate({width:'toggle'},350);
// });

// // 

// JavaScript method

const mobileHamburger = document.getElementById('sidenav-toggle');
const sidenav = document.getElementsByTagName('nav');

mobileHamburger.addEventListener('click', () => {
  sidenav[0].classList.toggle("nav-visible");
});