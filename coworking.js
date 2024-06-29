document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (id) {
    fetch(`https://my-json-server.typicode.com/oscarsolerunir/coworkings-spain/coworkings/${id}`)
      .then(res => res.json())
      .then(coworking => {
        document.getElementById('imagen').src = coworking.imagen;
        document.getElementById('imagen').alt = coworking.nombre;
        document.getElementById('nombre').textContent = coworking.nombre;
        document.getElementById('descripcion').textContent = coworking.descripcion;
        document.getElementById('direccion').textContent = coworking.localizacion.direccion;
        document.getElementById('precio').textContent = `Desde ${coworking.precio}`;
        document.getElementById('horarios').textContent = `De lunes a viernes: ${coworking.horarios.lunes_viernes}, Sábados: ${coworking.horarios.sabado}, Domingos: ${coworking.horarios.domingo}`;
        document.getElementById('servicios').textContent = `Servicios: ${coworking.servicios.join(', ')}`;

        const backLink = document.getElementById('back-link');
        backLink.href = `ficha.html?id=${id}`;
      })
      .catch(error => console.error('Error fetching coworking:', error));
  } else {
    console.error('No ID provided in URL');
  }
});
