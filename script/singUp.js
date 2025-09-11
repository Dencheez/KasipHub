function switchForm(form) {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  if (form === 'login') {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
  } else {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
  }
}

if (window.location.hash === '#login') {
  switchForm('login');
}