// Retrieve the form element
const form = document.forms.myForm;

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = form.elements.Name.value;
    const email = form.elements.Email.value;
    const message = form.elements.Message.value;

    // Create an object to store the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Convert the form data object to JSON
    const jsonData = JSON.stringify(formData);

    // Save the form data to Local Storage
    localStorage.setItem('formData', jsonData);

    // clear the form
    form.reset();

    // Display a success message
    alert('Form data saved successfully!');
});