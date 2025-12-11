// script.js

// Apply theme from storage

function applyInitialThemeFromStorage() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    document.body.classList.add('light-mode');
  }
}


// Update icon based on theme

function updateModeIcon() {
  const icon = document.querySelector('.links .material-symbols-outlined');
  if (!icon) return;

  icon.textContent = document.body.classList.contains('light-mode')
    ? 'light_mode'
    : 'dark_mode';
}


// Toggle light/dark mode

function lightModeToggle() {
  const body = document.body;
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  updateModeIcon();
}


// Event listener

document.addEventListener('DOMContentLoaded', () => {
  applyInitialThemeFromStorage();
  updateModeIcon();
});