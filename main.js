const toggleButton=document.getElementsByClassName('toggle_button')[0];
const navLinks=document.getElementsByClassName('nav_links')[0];
toggleButton.addEventListener('click', () => {
	navLinks.classList.toggle('hide');
});