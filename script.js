document.getElementById("signupForm").addEventListener("submit", function(event) {
    
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return;
    }

    if (password !== confirmPassword) { 
        alert("Passwords do not match");
        return;
    }

    alert("Sign up successful");
}
);