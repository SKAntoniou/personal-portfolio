// Collapse Sidebar
sidebarButton = document.getElementById('sidebar-collapse');
mainTag = document.getElementsByTagName('main');
sidebar = document.getElementsByClassName('nav-desktop');
sidebarButton.addEventListener('click', () => {
  mainTag[0].classList.toggle('main-collapsed');
  sidebar[0].classList.toggle('nav-desktop-collapsed');
});