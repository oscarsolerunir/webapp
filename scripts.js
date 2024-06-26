document.addEventListener('DOMContentLoaded', () => {

  const loadCoworkings = (coworkings) => {
    const image = coworkings.filter(coworking => coworking.imagen)
    console.log(image)

    const coworkingWrapper = document.getElementById('coworking__wrapper')
    coworkings.forEach(coworking => {
      const coworkingElement = document.createElement('div')
      coworkingElement.innerHTML = `
        <div class="card">
          <a href="ficha.html?id=${coworking.id}">
            <img src="${coworking.imagen}" alt="${coworking.nombre}">
            <h2>${coworking.nombre}</h2>
          </a>
          <p>${coworking.descripcion}</p>
          <p>${coworking.localizacion.ciudad}</p>
          <p>${coworking.precio}</p>
          <p>De lunes a viernes: ${coworking.horarios.lunes_viernes}</p>
          <p>Sábados: ${coworking.horarios.sabado}</p>
          <p>Domingos: ${coworking.horarios.domingo}</p>
          <p>${coworking.servicios}</p>
        </div>
      `
      coworkingWrapper.appendChild(coworkingElement)
    })
  }

  fetch("https://my-json-server.typicode.com/oscarsolerunir/coworkings-spain/coworkings")
  .then(res => res.json())
  .then(coworkings => {  
    loadCoworkings(coworkings)
  })
})