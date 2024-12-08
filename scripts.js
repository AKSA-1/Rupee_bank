// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const icon = document.querySelector('.toggle-password i');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Optional JavaScript for form validation or submission handling can be added here
