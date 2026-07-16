const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return;
    }

    const user = {
        name: username,
        email: email,
        phone: phone
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created!");

    window.location.href = "index.html";
});
