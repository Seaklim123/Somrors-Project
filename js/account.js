const accountMenu = document.getElementById("accountMenu");
const user = JSON.parse(localStorage.getItem("user"));

if (user) {

    document.querySelectorAll(".userName").forEach(element => {
        element.textContent = user.name;
    });
    document.querySelectorAll(".userEmail").forEach(element => {
        element.textContent = user.email;
    });

    accountMenu.innerHTML = `
        <div class="dropdown">
            <a class="nav-link hover-color icon-size p-0" 
               href="#" 
               role="button" 
               data-bs-toggle="dropdown">
                <i class="bi bi-person-circle"></i>
            </a>

            <ul class="dropdown-menu dropdown-menu-end">
                <li>
                    <a class="dropdown-item" href="account.html">
                        <i class="bi bi-person me-2"></i>
                        My Account
                    </a>
                </li>

                <li>
                    <a class="dropdown-item" href="#" onclick="logout()">
                        <i class="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    `;

} else {

    accountMenu.innerHTML = `
        <div class="dropdown">
            <a class="nav-link hover-color icon-size p-0" 
               href="#" 
               role="button" 
               data-bs-toggle="dropdown">
                <i class="bi bi-person-circle"></i>
            </a>

            <ul class="dropdown-menu dropdown-menu-end">
                <li>
                    <a class="dropdown-item" href="login-form.html">
                        <i class="bi bi-box-arrow-in-right me-2"></i>
                        Login
                    </a>
                </li>

                <li>
                    <a class="dropdown-item" href="signup-form.html">
                        <i class="bi bi-person-plus me-2"></i>
                        Register
                    </a>
                </li>
            </ul>
        </div>
    `;
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}