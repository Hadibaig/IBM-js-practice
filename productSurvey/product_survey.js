// Get the submit button
const submitButton = document.getElementById('submitBtn');


// Function to submit feedback
function submitFeedback() {

    // Get values from input fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;


    // Display user information
    document.getElementById('userName').textContent = username;
    document.getElementById('userAge').textContent = age;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userJob').textContent = job;
    document.getElementById('userDesignation').textContent = designation;
    document.getElementById('userProductChoice').textContent = productType;
    document.getElementById('userFeedback').textContent = feedback;


    // Show user information section
    document.getElementById('userInfo').style.display = 'block';


    // Show thank-you message
    alert('Thank you for your valuable feedback');
}


// Run submitFeedback() when the button is clicked
submitButton.onclick = submitFeedback;


// Run submitFeedback() when Enter is pressed
document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        submitFeedback();
    }

});