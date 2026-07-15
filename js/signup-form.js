const pw = document.getElementById('password')
const confirmPw = document.getElementById('confirmPassword')

function validatePasswordMatch() {
  confirmPw.setCustomValidity(pw.value !== confirmPw.value ? "Passwords don't match." : "")
}

pw.addEventListener('input', validatePasswordMatch)
confirmPw.addEventListener('input', validatePasswordMatch)


(() => {
      'use strict'
      const forms = document.querySelectorAll('.needs-validation')
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          validatePasswordMatch() // re-check right before validity is evaluated
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    })()