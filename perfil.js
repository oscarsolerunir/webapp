document.addEventListener('DOMContentLoaded', () => {

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
    // Filtrar los coworkings destacados
    const destacados = coworkings.filter(coworking => coworking.reservado)
    loadCoworkings(destacados)
  })
})
