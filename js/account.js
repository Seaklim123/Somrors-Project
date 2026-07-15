// Handles the "My Account" page: showing/hiding the edit form, saving
// changes back into the Personal Information card (and profile card) in
// real time, and validating the Change Password form. Info is saved to
// localStorage so it survives a page refresh (there's no backend yet).

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
        displayUsername.textContent = info.username;
        profileUsername.textContent = info.username;
        inputUsername.value = info.username;
    }
    if (info.phone) {
        displayPhone.textContent = info.phone;
        inputPhone.value = info.phone;
    }
    if (info.email) {
        displayEmail.textContent = info.email;
        profileEmail.textContent = info.email;
        inputEmail.value = info.email;
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

/* ---------------- Change Password ---------------- */

const updatePasswordBtn = document.getElementById('updatePassword');
const currentPasswordInput = document.getElementById('current-password');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordFeedback = document.getElementById('password-feedback');

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

loadSavedInfo();
