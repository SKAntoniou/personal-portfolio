// Collapse Sidebar
const sidebarButton = document.getElementById('sidebar-collapse');
const mainTag = document.getElementsByTagName('main');
const sidebar = document.getElementsByClassName('nav-desktop');
sidebarButton.addEventListener('click', () => {
  mainTag[0].classList.toggle('main-collapsed');
  sidebar[0].classList.toggle('nav-desktop-collapsed');
  sidebarButton.classList.toggle('rotate');
});

// Light / Dark Mode Toggle
// Will default to browser settings and only show option to switch.
// Once switched it will go by user controlled setting.
const lightMode = document.getElementById('lightmode');
const darkMode = document.getElementById('darkmode');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleLDButtons(prefersDark) {
  if (prefersDark) {
    darkMode.classList.add('hide');
    lightMode.classList.remove('hide');
  } else {
    darkMode.classList.remove('hide');
    lightMode.classList.add('hide');
  }
}
toggleLDButtons(prefersDarkScheme);
prefersDarkScheme.addEventListener('change', () => {
  toggleLDButtons(prefersDarkScheme);
});
lightMode.addEventListener('click', () => {
  document.documentElement.setAttribute("data-theme", 'light');
  toggleLDButtons(false);
})
darkMode.addEventListener('click', () => {
  document.documentElement.setAttribute("data-theme", 'dark');
  toggleLDButtons(true);
})