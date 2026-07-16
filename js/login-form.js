const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    const user = {
        name: username,
        email: email
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Login successful!");

    window.location.href = "index.html";
});