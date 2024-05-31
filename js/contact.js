// Select the contact form
const contactForm = document.getElementById('contactForm');

// Add event listener to form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Display a confirmation message
  const confirmationMessage = document.createElement('p');
  confirmationMessage.textContent = 'Message sent';
  contactForm.parentNode.insertBefore(confirmationMessage, contactForm.nextSibling);

  // Optionally, clear the form fields after submission
  contactForm.reset();

  // Remove the confirmation message after a certain time (e.g., 3 seconds)
  setTimeout(function() {
    confirmationMessage.remove();
  }, 3000);
});
