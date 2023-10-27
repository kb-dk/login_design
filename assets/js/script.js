'use strict';

function togglePasswordVisibility() {
    const inputToggleButton = document.querySelector('#visibility');
    inputToggleButton.addEventListener('click', function () {
        // Toggle input type
        const inputToggleIcon = document.querySelector('#visibility .material-icons');
        const inputPasswordField = document.querySelector('#password');
        const type = inputPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        inputPasswordField.setAttribute('type', type);

        // Toggle icon
        if (inputToggleIcon.innerHTML === "visibility") {
            inputToggleIcon.innerHTML = "visibility_off";
            inputToggleButton.title = "Skjul password";
        } else if (inputToggleIcon.innerHTML === "visibility_off") {
            inputToggleIcon.innerHTML = "visibility";
            inputToggleButton.title = "Vis password";
        }
    });
}

function initiateBootstrapTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

function validateBootstrapForm() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
// and show the only error message if necessary
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated');
            if (form.querySelectorAll('.form-control:invalid').length) {
                document.getElementById("invalid-feedback").style.display = "block";
                document.getElementsByTagName('form')[0].classList.add("rdl-invalid-form");
            }
        }, false)
    })
}

togglePasswordVisibility();
initiateBootstrapTooltips();
validateBootstrapForm();