const STORAGE_KEY = "user";

const editBtn = document.getElementById('editBtn');
const editFormCard = document.getElementById('editFormCard');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
const saveFeedback = document.getElementById('save-feedback');

const displayUsername = document.querySelector('.display-username');
const displayPhone = document.querySelector('.display-phone');
const displayEmail = document.querySelector('.display-email');
const profileUsername = document.querySelector('.profile-username');
const profileEmail = document.querySelector('.profile-email');

const inputUsername = document.getElementById('input-username');
const inputPhone = document.getElementById('input-phone');
const inputEmail = document.getElementById('input-email');

function applyInfo(user) {
    if (!user) return;

    if (displayUsername) displayUsername.textContent = user.name || "";
    if (profileUsername) profileUsername.textContent = user.name || "";
    if (inputUsername) inputUsername.value = user.name || "";

    if (displayPhone) displayPhone.textContent = user.phone || "";
    if (inputPhone) inputPhone.value = user.phone || "";

    if (displayEmail) displayEmail.textContent = user.email || "";
    if (profileEmail) profileEmail.textContent = user.email || "";
    if (inputEmail) inputEmail.value = user.email || "";
}

function loadSavedInfo() {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (user) {
        applyInfo(user);
    }
}

function showEditForm() {
    editFormCard.classList.remove('d-none');
    editFormCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    inputUsername.focus();
}

function hideEditForm() {
    editFormCard.classList.add('d-none');
}

function resetInputsToDisplay() {
    inputUsername.value = displayUsername.textContent.trim();
    inputPhone.value = displayPhone.textContent.trim();
    inputEmail.value = displayEmail.textContent.trim();
}
if (editBtn && editFormCard && saveBtn && cancelBtn) {

    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetInputsToDisplay();
        showEditForm();
    });

    cancelBtn.addEventListener('click', () => {
        resetInputsToDisplay();
        hideEditForm();
    });

    saveBtn.addEventListener("click", () => {
    const username = inputUsername.value.trim();
    const phone = inputPhone.value.trim();
    const email = inputEmail.value.trim();

        saveFeedback.classList.remove("text-success", "text-danger");

        if (!username || !phone || !email) {
            saveFeedback.textContent = "Please fill in every field.";
            saveFeedback.classList.add("text-danger");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            saveFeedback.textContent = "Please enter a valid email address.";
            saveFeedback.classList.add("text-danger");
            return;
        }

        let user = JSON.parse(localStorage.getItem("user")) || {};

        user.name = username;
        user.phone = phone;
        user.email = email;

        localStorage.setItem("user", JSON.stringify(user));

        applyInfo(user);

        saveFeedback.textContent = "Saved!";
        saveFeedback.classList.add("text-success");

        hideEditForm();

        setTimeout(() => {
            saveFeedback.textContent = "";
        }, 2500);
    });

    loadSavedInfo();
}

/* ---------------- Change Password ---------------- */

const updatePasswordBtn = document.getElementById('updatePassword');
const currentPasswordInput = document.getElementById('current-password');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordFeedback = document.getElementById('password-feedback');

if (updatePasswordBtn && currentPasswordInput && newPasswordInput && confirmPasswordInput) {
    updatePasswordBtn.addEventListener('click', () => {
        const current = currentPasswordInput.value;
        const next = newPasswordInput.value;
        const confirm = confirmPasswordInput.value;

        passwordFeedback.classList.remove('text-success', 'text-danger');

        if (!current || !next || !confirm) {
            passwordFeedback.textContent = 'Please fill in all three fields.';
            passwordFeedback.classList.add('text-danger');
            return;
        }

        if (next.length < 6) {
            passwordFeedback.textContent = 'New password must be at least 6 characters.';
            passwordFeedback.classList.add('text-danger');
            return;
        }

        if (next !== confirm) {
            passwordFeedback.textContent = 'New password and confirmation do not match.';
            passwordFeedback.classList.add('text-danger');
            return;
        }

        passwordFeedback.textContent = 'Password updated!';
        passwordFeedback.classList.add('text-success');

        currentPasswordInput.value = '';
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';

        setTimeout(() => {
            passwordFeedback.textContent = '';
        }, 2500);
    });
}

const accountMenu = document.getElementById("accountMenu");
const user = JSON.parse(localStorage.getItem("user"));

if (user) {

    // Show user information
    applyInfo(user);

    // Account dropdown
    if (accountMenu) {
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
    }

} else {

    // User not logged in
    if (accountMenu) {
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
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

window.logout = logout;