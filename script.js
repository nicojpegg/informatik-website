function lightModeToggle() {
  var element = document.body;
  element.classList.toggle("light-mode");

  var icon = document.querySelector('.links .material-symbols-outlined');
  if (icon) {
    if (icon.textContent.trim() === 'dark_mode') {
      icon.textContent = 'light_mode';
    } else {
      icon.textContent = 'dark_mode';
    }
  }
}