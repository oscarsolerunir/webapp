const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'contraseña') {
        sessionStorage.setItem('username', username);

        window.location.href = 'carga.html';
    } else {
        alert('Credenciales incorrectas');
    }
});

function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "250px";
    }
}

