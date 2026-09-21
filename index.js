document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (firstName === "" || lastName === "" || email === "" || phone === "") {
        alert("Please fill all required fields");
        return;
    }

    alert("Registration Successful!");

    this.reset();
});