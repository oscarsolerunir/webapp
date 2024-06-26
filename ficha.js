document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  fetch(`https://my-json-server.typicode.com/oscarsolerunir/coworkings-spain/coworkings/${id}`)
    .then(res => res.json())
    .then(coworking => {
      document.getElementById('imagen').src = coworking.imagen;
      document.getElementById('imagen').alt = coworking.nombre;
      document.getElementById('nombre').textContent = coworking.nombre;
      document.getElementById('descripcion').textContent = coworking.descripcion;
      document.getElementById('localizacion').textContent = coworking.localizacion.ciudad;
      document.getElementById('precio').textContent = coworking.precio;
      document.getElementById('horarios').textContent = `De lunes a viernes: ${coworking.horarios.lunes_viernes}, Sábados: ${coworking.horarios.sabado}, Domingos: ${coworking.horarios.domingo}`;
      document.getElementById('servicios').textContent = coworking.servicios;
    })
    .catch(error => console.error('Error fetching coworking:', error));
});