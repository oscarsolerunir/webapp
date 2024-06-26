const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Correo electrónico no válido');
        return;
    }

    const defaultEmail = 'usuario@ejemplo.com';
    const defaultUsername = 'usuario';
    const defaultPassword = 'contraseña';

    if (email === defaultEmail && username === defaultUsername && password === defaultPassword) {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('username', username);

        window.location.href = 'carga.html';
    } else {
        alert('Credenciales incorrectas');
    }
});
