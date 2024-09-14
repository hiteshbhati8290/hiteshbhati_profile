document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value
    };

    // Send the email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again.');
    });
});
