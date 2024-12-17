document.getElementById("employeeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const employeeId = document.getElementById("employeeId").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;
    const dateOfJoining = document.getElementById("dateOfJoining").value;
    const role = document.getElementById("role").value.trim();

    // Form validation
    if (!name || !employeeId || !email || !phone || !department || !dateOfJoining || !role) {
        displayMessage("All fields are required.", "red");
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        displayMessage("Name must contain only letters and spaces.", "red");
        return;
    }

    if (!/^[a-zA-Z0-9]{1,10}$/.test(employeeId)) {
        displayMessage("Employee ID must be alphanumeric and max 10 characters.", "red");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        displayMessage("Phone number must be a 10-digit numeric value.", "red");
        return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (new Date(dateOfJoining) > new Date(today)) {
        displayMessage("Date of Joining cannot be a future date.", "red");
        return;
    }

    displayMessage("Employee added successfully!", "green");

    // Clear form
    document.getElementById("employeeForm").reset();
});

function displayMessage(message, color) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = color;
}
