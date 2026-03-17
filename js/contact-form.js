/* ============================================================
   CONTACT-FORM.JS - Form Validation and Submission
   ============================================================ */

(function() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    // Form field elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Validation rules
    const validators = {
        name: {
            email: nameInput,
            rules: [
                {
                    validate: (value) => value.trim().length > 0,
                    message: 'Name is required'
                },
                {
                    validate: (value) => value.trim().length >= 2,
                    message: 'Name must be at least 2 characters'
                }
            ]
        },
        email: {
            element: emailInput,
            rules: [
                {
                    validate: (value) => value.trim().length > 0,
                    message: 'Email is required'
                },
                {
                    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                    message: 'Please enter a valid email address'
                }
            ]
        },
        message: {
            element: messageInput,
            rules: [
                {
                    validate: (value) => value.trim().length > 0,
                    message: 'Message is required'
                },
                {
                    validate: (value) => value.trim().length >= 10,
                    message: 'Message must be at least 10 characters'
                }
            ]
        }
    };

    // Validate a single field
    function validateField(fieldName) {
        const validator = validators[fieldName];
        let isValid = true;
        let errorMessage = '';

        for (const rule of validator.rules) {
            if (!rule.validate(validator.element.value)) {
                isValid = false;
                errorMessage = rule.message;
                break;
            }
        }

        // Display error or clear it
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (!isValid) {
            validator.element.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        } else {
            validator.element.classList.remove('error');
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }

        return isValid;
    }

    // Validate entire form
    function validateForm() {
        return Object.keys(validators).every(fieldName => {
            return validateField(fieldName);
        });
    }

    // Real-time validation on blur
    nameInput.addEventListener('blur', () => validateField('name'));
    emailInput.addEventListener('blur', () => validateField('email'));
    messageInput.addEventListener('blur', () => validateField('message'));

    // Real-time validation on input (clear error when user starts typing)
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) {
            validateField('name');
        }
    });
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error')) {
            validateField('email');
        }
    });
    messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('error')) {
            validateField('message');
        }
    });

    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            console.log('Form validation failed');
            return;
        }

        // Disable submit button during submission
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            // Collect form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                company: document.getElementById('company').value.trim(),
                interests: getSelectedInterests(),
                message: messageInput.value.trim(),
                timestamp: new Date().toISOString()
            };

            // Option 1: Using Formspree (requires setting up Formspree endpoint)
            // Replace YOUR_FORMSPREE_ID with actual ID
            const formspreeResult = await submitToFormspree(formData);

            if (formspreeResult.ok) {
                showSuccessMessage();
                contactForm.reset();
                clearAllErrors();
            } else {
                showErrorMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showErrorMessage('An error occurred. Please try again later.');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    // Get selected interests
    function getSelectedInterests() {
        const checkboxes = contactForm.querySelectorAll('input[name="interest"]:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }

    // Submit to Formspree
    async function submitToFormspree(data) {
        // IMPORTANT: Replace this with your actual Formspree endpoint
        // Get your endpoint from https://formspree.io/
        // Example: https://formspree.io/f/YOUR_FORM_ID
        
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meojzpky'; // PLACEHOLDER - UPDATE THIS

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    company: data.company,
                    interests: data.interests.join(', '),
                    message: data.message
                })
            });

            return response;
        } catch (error) {
            console.error('Formspree submission error:', error);
            throw error;
        }
    }

    // Show success message
    function showSuccessMessage() {
        // Create or find success message element
        let successMsg = contactForm.querySelector('.form-success');
        
        if (!successMsg) {
            successMsg = document.createElement('div');
            successMsg.className = 'form-success';
            contactForm.insertBefore(successMsg, contactForm.firstChild);
        }

        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
        successMsg.classList.add('show');

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);

        // Scroll to form
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Show error message
    function showErrorMessage(message) {
        let errorMsg = contactForm.querySelector('.form-error');
        
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'form-error';
            errorMsg.style.cssText = 'background-color: rgba(239, 68, 68, 0.1); color: #DC2626; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem; display: none;';
            contactForm.insertBefore(errorMsg, contactForm.firstChild);
        }

        errorMsg.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        errorMsg.style.display = 'block';

        // Auto-hide error message after 5 seconds
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 5000);
    }

    // Clear all errors
    function clearAllErrors() {
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        messageInput.classList.remove('error');
        
        nameError.textContent = '';
        nameError.classList.remove('show');
        emailError.textContent = '';
        emailError.classList.remove('show');
        messageError.textContent = '';
        messageError.classList.remove('show');
    }

})();
