document.addEventListener("DOMContentLoaded", () => {
    // Form Selection
    const form = document.getElementById("registration-form");

    // Feedback Div Selection
    const feedbackDiv = document.getElementById("form-feedback");

    // Form Submission Event Listener
    form.addEventListener("submit", (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Retrieve User Inputs and trim them
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Validation for Username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validation for Email
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Validation for Password
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic
        feedbackDiv.style.display = "block"; // Make feedbackDiv visible

        if (isValid) {
            // Success feedback
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            // Error feedback
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
