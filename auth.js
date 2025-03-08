const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

loginBtn.addEventListener('click', () => {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      alert('Login successful!');
      // Redirect ke halaman dashboard
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});

signupBtn.addEventListener('click', () => {
  auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      alert('Sign up successful!');
      // Redirect ke halaman dashboard
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});