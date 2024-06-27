document.getElementById('user-email').textContent = sessionStorage.getItem('email');

function logout() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}

function toggleMenu() {
    var sideMenu = document.getElementById('sideMenu');
    if (sideMenu.style.width === '250px') {
        sideMenu.style.width = '0';
    } else {
        sideMenu.style.width = '250px';
    }
}