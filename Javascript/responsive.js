// Mobile menu toggle functionality
document.getElementById('mobile-menu').addEventListener('click', function() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
  this.classList.toggle('active');
});