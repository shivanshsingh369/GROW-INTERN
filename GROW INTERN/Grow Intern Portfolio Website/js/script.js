document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value;
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        alert("Message submitted successfully!");

        form.reset();
    });

    function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    }
});
