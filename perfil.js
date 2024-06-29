document.addEventListener('DOMContentLoaded', () => {

  const formPerfilUsuario = document.getElementById('formperfilusuario');

    const campos = [
        { id: 'modal-nombre', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/ },
        { id: 'modal-profesion', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/ },
        { id: 'modal-sobre-mi', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.,;:()?!-]+$/ },
        { id: 'modal-hobbies', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s,]+$/ },
        { id: 'modal-idiomas', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s,]+$/ },
        { id: 'modal-estudios', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s,]+$/ }
    ];

    function validarCampos() {
        let isValid = true;
        
        campos.forEach(campo => {
            const input = document.getElementById(campo.id);
            input.addEventListener('input', () => input.setCustomValidity(""));

            if (!campo.regex.test(input.value.trim())) {
                input.setCustomValidity("Campo inválido.");
                isValid = false;
            }
        });

        return isValid && formPerfilUsuario.checkValidity();
    };

    
    formPerfilUsuario.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validarCampos()) {
            formPerfilUsuario.reportValidity();
            return;
        }
    
        const formData = new FormData(event.target);

        const nombrePerfil = formData.get("modal-nombre");
        const profesionPerfil = formData.get("modal-nombre");
        const sobremiPerfil = formData.get("modal-sobre-mi");
        const hobbiesPerfil = formData.get("modal-hobbies");
        const idiomasPerfil = formData.get("modal-idiomas");
        const estudiosPerfil = formData.get("modal-estudios");

        localStorage.setItem('nombre', nombrePerfil);
        localStorage.setItem('profesion', profesionPerfil);
        localStorage.setItem('sobreMi', sobremiPerfil);
        localStorage.setItem('hobbies', hobbiesPerfil);
        localStorage.setItem('idiomas', idiomasPerfil);
        localStorage.setItem('estudios', estudiosPerfil);

        document.getElementById('inputnombre').textContent = document.getElementById('modal-nombre').value;
        document.getElementById('inputprofesion').textContent = document.getElementById('modal-profesion').value;
        document.getElementById('inputsobremi').textContent = document.getElementById('modal-sobre-mi').value;
        document.getElementById('inputhobbies').textContent = document.getElementById('modal-hobbies').value;
        document.getElementById('inputidiomas').textContent = document.getElementById('modal-idiomas').value;
        document.getElementById('inputestudios').textContent = document.getElementById('modal-estudios').value;

        const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal'));
        modal.hide();

        formPerfilUsuario.reset();
    });

  const loadCoworkings = (coworkings) => {
    const coworkingReserved = document.querySelector('.coworking__reserved')
    coworkings.forEach(coworking => {
      const coworkingElement = document.createElement('div')
      coworkingElement.classList.add('col-12')
      coworkingElement.classList.add('col-md-4')
      coworkingElement.classList.add('mb-3')
      coworkingElement.innerHTML = `
        <a href="ficha.html?id=${coworking.id}">
          <div class="card">
            <img src="${coworking.imagen}" alt="${coworking.nombre}">
            <div class="card-body">
              <h5 class="card-title">${coworking.nombre}</h5>
              <p class="card-text">Desde ${coworking.precio}</p>
            </div>
          </div>
        </a>
      `
      coworkingReserved.appendChild(coworkingElement)
    })
  }

  fetch("https://my-json-server.typicode.com/oscarsolerunir/coworkings-spain/coworkings")
  .then(res => res.json())
  .then(coworkings => {
    const destacados = coworkings.filter(coworking => coworking.reservado)
    loadCoworkings(destacados)
  })
})
