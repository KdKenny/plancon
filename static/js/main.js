const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(() => {
  $("#message").fadeOut("slow");
}, 3000);

// Hamburger Menu Fallback (Bootstrap 4 handles this automatically, but good for debugging)
document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.getElementById('navbarToggler');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (toggler && navbarMenu) {
    toggler.addEventListener('click', function() {
      // Bootstrap 4 automatically handles this with data-toggle and data-target
      // This is just for debugging purposes
      console.log('Hamburger menu clicked');
      console.log('Menu element:', navbarMenu);
      console.log('Menu classes:', navbarMenu.className);
    });
  }
});