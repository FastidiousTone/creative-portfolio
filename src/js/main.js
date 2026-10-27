import '../css/tokens.css';
import '../css/styles.css';

// Menu toggle function can be added directly to the main.js file.

// 1. Select the toggle button using its class or ID
const menuToggle = document.querySelector('.menu-toggle');

// 2. Select the navigation list using its class or ID
const navLinks = document.querySelector('.nav-links');

// console.log(savedTheme);

menuToggle.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('active');
	menuToggle.setAttribute('aria-expanded', String(isOpen));

	if (isOpen) {
		menuToggle.textContent = 'Close';
	} else {
		menuToggle.textContent = 'Menu';
	}

	// console.log(isOpen);
});

// Find the navbar that contains both the toggle button and links.
const navBar = document.querySelector('.navbar');

// Listen for key presses when focus is inside the navbar.
// Events from its buttons and links bubble up to this parent.
navBar.addEventListener('keydown', (event) => {
	// Run only when BOTH conditions are true:
	// 1. The pressed key is Escape.
	// 2. The navigation currently has the "active" class.
	if (event.key === 'Escape' && navLinks.classList.contains('active')) {
		// Remove the open-state class.
		// The mobile CSS then hides the navigation list.
		navLinks.classList.remove('active');

		// Tell assistive technology that the menu is collapsed.
		// setAttribute converts false into the string "false".
		menuToggle.setAttribute('aria-expanded', false);

		// Restore the button's closed-state label.
		menuToggle.textContent = 'Menu';

		// Return keyboard focus to the button because the
		// previously focused navigation link may now be hidden.
		menuToggle.focus();
	}
});

// 3. For the toggleTheme button. My HTML class is theme-toggle, so the selector must match it. I used themeToggle as the variable name instead of toggleTheme.
const themeToggle = document.querySelector('.theme-toggle');

// document.documentElement is a property that already returns <html>, rather than a function. I removed ('html')
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

// My placement was correct. However, the condition needs a full comparison on both sides of ||. Previous code: if (savedTheme === 'light' || 'dark')

if (savedTheme === 'light' || savedTheme === 'dark') {
	root.setAttribute('data-theme', savedTheme);
} else {
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (prefersDark === true) {
		root.setAttribute('data-theme', 'dark');
	} else {
		root.setAttribute('data-theme', 'light');
	}
}

if (root.getAttribute('data-theme') === 'dark') {
	themeToggle.setAttribute('aria-label', 'Switch to light theme');
} else {
	themeToggle.setAttribute('aria-label', 'Switch to dark theme');
}

themeToggle.addEventListener('click', () => {
	const currentTheme = root.getAttribute('data-theme');
	if (currentTheme === 'dark') {
		root.setAttribute('data-theme', 'light');
		themeToggle.setAttribute('aria-label', 'Switch to dark theme');
		localStorage.setItem('theme', 'light');
	} else {
		root.setAttribute('data-theme', 'dark');
		themeToggle.setAttribute('aria-label', 'Switch to light theme');
		localStorage.setItem('theme', 'dark');
	}
	// console.log(currentTheme);
});
