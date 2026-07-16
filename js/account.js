// Handles the "My Account" page: showing/hiding the edit form, saving
// changes back into the Personal Information card (and profile card) in
// real time, and validating the Change Password form. Info is saved to
// localStorage so it survives a page refresh (there's no backend yet).
//
// This file is also loaded on other pages (login, signup...) for the
// navbar login/logout dropdown at the bottom, so every account-page-only
// piece below is guarded with an existence check first.

const STORAGE_KEY = 'somros_account_info';

const editBtn = document.getElementById('editBtn');
const editFormCard = document.getElementById('editFormCard');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
const saveFeedback = document.getElementById('save-feedback');

const displayUsername = document.getElementById('display-username');
const displayPhone = document.getElementById('display-phone');
const displayEmail = document.getElementById('display-email');
const profileUsername = document.getElementById('profile-username');
const profileEmail = document.getElementById('profile-email');

const inputUsername = document.getElementById('input-username');
const inputPhone = document.getElementById('input-phone');
const inputEmail = document.getElementById('input-email');

function applyInfo(info) {
    if (info.username) {
        if (displayUsername) displayUsername.textContent = info.username;
        if (profileUsername) profileUsername.textContent = info.username;
        if (inputUsername) inputUsername.value = info.username;
    }
    if (info.phone) {
        if (displayPhone) displayPhone.textContent = info.phone;
        if (inputPhone) inputPhone.value = info.phone;
    }
    if (info.email) {
        if (displayEmail) displayEmail.textContent = info.email;
        if (profileEmail) profileEmail.textContent = info.email;
        if (inputEmail) inputEmail.value = info.email;
    }
}

function loadSavedInfo() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    applyInfo(JSON.parse(saved));
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

// everything in this block only applies to account.html, which has all of these elements
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

    saveBtn.addEventListener('click', () => {
        const username = inputUsername.value.trim();
        const phone = inputPhone.value.trim();
        const email = inputEmail.value.trim();

        saveFeedback.classList.remove('text-success', 'text-danger');

        if (!username || !phone || !email) {
            saveFeedback.textContent = 'Please fill in every field.';
            saveFeedback.classList.add('text-danger');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            saveFeedback.textContent = 'Please enter a valid email address.';
            saveFeedback.classList.add('text-danger');
            return;
        }

        const info = { username, phone, email };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
        applyInfo(info);

        saveFeedback.textContent = 'Saved!';
        saveFeedback.classList.add('text-success');

        hideEditForm();

        setTimeout(() => {
            saveFeedback.textContent = '';
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

        // There's no backend yet, so this just simulates success on the front end.
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

/* ---------------- Nav login/logout state ----------------
   Shows a dropdown in the navbar: "My Account"/"Logout" when someone is
   logged in (reading the "user" object saved by login-form/signup-form),
   or "Login"/"Register" when no one is. Also fills in any .userName /
   .userEmail / .userPhone elements on the page with the logged-in user's
   info — these share the same elements as the Personal Information card
   above, so logging in overwrites any manually-saved edits with the
   real account. */

const accountMenu = document.getElementById("accountMenu");
const user = JSON.parse(localStorage.getItem("user"));

if (user) {

    document.querySelectorAll(".userName").forEach(element => {
        element.textContent = user.name;
    });
    document.querySelectorAll(".userEmail").forEach(element => {
        element.textContent = user.email;
    });
    if (user.phone) {
        document.querySelectorAll(".userPhone").forEach(element => {
            element.textContent = user.phone;
        });
    }

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

} else if (accountMenu) {

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
