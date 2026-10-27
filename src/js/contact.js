const contactForm = document.querySelector('.contact-form');
contactForm.noValidate = true;

const formStatus = document.querySelector('.form-status');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const formFieldName = document.getElementById('name');
const formFieldEmail = document.getElementById('email');
const formFieldMessage = document.getElementById('message');

console.log(contactForm);

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();
	formStatus.textContent = '';

	// Both branches update two things:
	// - The paragraph displays or clears the error.
	// - The input’s aria-invalid attribute tells assistive technology whether it has an error.

	validateName();
	validateMessage();
	validateEmail();

	const firstInvalidField = contactForm.querySelector('[aria-invalid="true"]');

	// There was no need to add anything else within the if() accept (firstInvalidField) because the variable above stores the desired information within the variable name.
	if (firstInvalidField) {
		firstInvalidField.focus();
	} else {
		formStatus.textContent = 'Demo inquiry validated. No message was sent.';
	}
	// Yes—that’s a valid way to inspect it. 🙂 console.log(formFieldEmail) displays the input element so you can examine its attributes. You can also inspect it directly in DevTools’ Elements/Inspector panel without logging it.One detail: logged elements can reflect their latest state when expanded. To log the attribute’s value at that exact moment, use below:

	console.log(formFieldEmail.getAttribute('aria-invalid'));

	// console.log(formFieldEmail);

	// Remember we'll start off with the formField... variable at the start of the if/else statement. Then when we want a message to be displayed, that's when we utilize the name,email or messageError variable so that we can display the desired message using textContent clears the error message by using an empty string.

	// validity.typeMismatch uses the browser’s email-format check, even with noValidate enabled. Try adding that separate block inside the same submit listener.

	// all three branches use formFieldEmail.setAttribute(), because you’re marking the email input as valid or invalid. | - emailError.textContent → updates the error paragraph. | - formFieldEmail.setAttribute() → updates the input’s attribute.
});

function validateName() {
	if (formFieldName.value.trim() === '') {
		nameError.textContent = 'Please enter your name.';
		formFieldName.setAttribute('aria-invalid', 'true');
	} else {
		nameError.textContent = '';
		formFieldName.setAttribute('aria-invalid', 'false');
	}
}

function validateMessage() {
	if (formFieldMessage.value.trim() === '') {
		messageError.textContent = 'Please enter your message.';
		formFieldMessage.setAttribute('aria-invalid', 'true');
	} else {
		messageError.textContent = '';
		formFieldMessage.setAttribute('aria-invalid', 'false');
	}
}

function validateEmail() {
	if (formFieldEmail.value.trim() === '') {
		emailError.textContent = 'Please enter your email address.';
		formFieldEmail.setAttribute('aria-invalid', 'true');
	} else if (formFieldEmail.validity.typeMismatch === true) {
		emailError.textContent = 'Please enter a valid email address.';
		formFieldEmail.setAttribute('aria-invalid', 'true');
	} else {
		emailError.textContent = '';
		formFieldEmail.setAttribute('aria-invalid', 'false');
	}
}

formFieldName.addEventListener('blur', () => {
	// console.log('Name lost focus');
	console.log('Checking name:', formFieldName.value.trim());
	validateName();
});

formFieldEmail.addEventListener('blur', () => {
	// console.log('Email lost focus');
	console.log('Checking email:', formFieldEmail.value.trim());
	validateEmail();
});

formFieldMessage.addEventListener('blur', () => {
	// console.log('Message lost focus');
	console.log('Checking message:', formFieldMessage.value.trim());
	validateMessage();
});

formFieldName.addEventListener('input', () => {
	if (formFieldName.hasAttribute('aria-invalid')) {
		// console.log(formFieldName);
		validateName();
	}
});

formFieldEmail.addEventListener('input', () => {
	if (formFieldEmail.hasAttribute('aria-invalid')) {
		// console.log(formFieldEmail);
		validateEmail();
	}
});

formFieldMessage.addEventListener('input', () => {
	if (formFieldMessage.hasAttribute('aria-invalid')) {
		// console.log(formFieldMessage);
		validateMessage();
	}
});

contactForm.addEventListener('input', () => {
	formStatus.textContent = '';
});
