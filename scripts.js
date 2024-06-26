document.addEventListener('DOMContentLoaded', () => {

  const loadCoworkings = (coworkings) => {
    const image = coworkings.filter(coworking => coworking.imagen)
    console.log(image)

    const coworkingWrapper = document.getElementById('coworking__wrapper')
    coworkings.forEach(coworking => {
      const coworkingElement = document.createElement('div')
      coworkingElement.innerHTML = `
        <div class="card">
          <img src="${coworking.imagen}" alt="Coworking image">
          <h2>${coworking.nombre}</h2>
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