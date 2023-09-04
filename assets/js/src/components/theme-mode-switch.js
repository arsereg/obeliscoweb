/**
 * Theme Mode Switch
 * Switch betwen light/dark mode. The chosen mode is saved to browser's local storage
*/

const themeModeSwitch = (() => {

  let modeSwitch = document.querySelector('[data-bs-toggle="mode"]');
  
  if(modeSwitch === null) return;

  let checkbox = modeSwitch.querySelector('.form-check-input');

  if (mode === 'dark') {
    root.classList.add('dark-mode');
    checkbox.checked = true;
  }

})();

export default themeModeSwitch;
