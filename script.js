document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    var signupModal = document.getElementById('signupModal');
    signupModal.style.display = 'flex';

    setTimeout(function() {
        signupModal.style.display = 'none';
        document.getElementById('signupForm').reset();
        window.location.href = 'login.html';
    }, 3000);
});

const signupPassword = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function() {
  const type = signupPassword.getAttribute('type') === 'text' ? 'password' : 'text';
  signupPassword.setAttribute('type', type);
  togglePassword.className = type === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye-fill';
});