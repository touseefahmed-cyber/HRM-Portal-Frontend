// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
// 
document.getElementById('mobile_btn').addEventListener('click', function() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  sidebarMenu.classList.toggle('menu-active'); // Add or remove 'active' class
});
// 
document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.querySelectorAll('.input-blcok input');

  inputs.forEach(function(input) {
      input.addEventListener('click', function() {
          this.classList.toggle('form-focus');
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  startAnimation();
  
  function startAnimation() {
      document.querySelectorAll('.skills').forEach(function (skillElement) {
          const skillBar = skillElement.querySelector('.skillbar');
          const targetWidth = skillElement.getAttribute('data-percent');
          
          skillBar.style.transition = "width 4s";
          skillBar.style.width = targetWidth;
      });
  }
});
