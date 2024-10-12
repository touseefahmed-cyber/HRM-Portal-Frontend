// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
// 
$(document).ready(function() {
  $('#mySelect').select2();
});
// 
document.getElementById('mobile_btn').addEventListener('click', function() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  sidebarMenu.classList.toggle('menu-active'); // Add or remove 'active' class
});