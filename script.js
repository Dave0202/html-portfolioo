// script.js

function sendChat() {
  const input = document.getElementById('chatInput');
  alert('You entered: ' + input.value);
  input.value = '';
}

// Dropdown logic
document.addEventListener('DOMContentLoaded', () => {
  // More dropdown
  const moreBtn = document.getElementById('moreBtn');
  const moreMenu = document.getElementById('moreMenu');
  moreBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    moreMenu.classList.toggle('show');
  });

  // Globe dropdown
  const globeBtn = document.getElementById('globeBtn');
  const globeMenu = document.getElementById('globeMenu');
  globeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    globeMenu.classList.toggle('show');
  });

  // Login dropdown
  const loginBtn = document.getElementById('loginBtn');
  const loginMenu = document.getElementById('loginMenu');
  loginBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    loginMenu.classList.toggle('show');
  });

  // Close dropdowns on click outside
  document.addEventListener('click', function(event) {
    if (!moreMenu.contains(event.target) && event.target !== moreBtn) {
      moreMenu.classList.remove('show');
    }
    if (!globeMenu.contains(event.target) && event.target !== globeBtn) {
      globeMenu.classList.remove('show');
    }
    if (!loginMenu.contains(event.target) && event.target !== loginBtn) {
      loginMenu.classList.remove('show');
    }
  });
});
