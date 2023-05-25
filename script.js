document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    alert("Welcome" + " " + email);
});