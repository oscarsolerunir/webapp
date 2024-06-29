document.addEventListener('DOMContentLoaded', () => {
  const startDate = document.getElementById('start');
  const endDate = document.getElementById('end');
  const startTime = document.getElementById('start-time');
  const endTime = document.getElementById('end-time');
  const numPersonas = document.getElementById('num-personas');
  const formReserva = document.getElementById('formreserva');

  startDate.addEventListener('change', () => {
    endDate.min = startDate.value;
    if (endDate.value && endDate.value < startDate.value) {
      endDate.value = startDate.value;
    }
  });

  endDate.addEventListener('change', () => {
    if (endDate.value < startDate.value) {
      endDate.value = startDate.value;
    }
  });

  formReserva.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario para validación

    let valid = true;
    const errorMessages = [];

    if (!startDate.value) {
      valid = false;
      errorMessages.push('Por favor, selecciona una fecha de inicio.');
    }
    if (!endDate.value) {
      valid = false;
      errorMessages.push('Por favor, selecciona una fecha de fin.');
    }
    if (!startTime.value) {
      valid = false;
      errorMessages.push('Por favor, selecciona una hora de llegada.');
    }
    if (!endTime.value) {
      valid = false;
      errorMessages.push('Por favor, selecciona una hora de salida.');
    }
    if (!numPersonas.value) {
      valid = false;
      errorMessages.push('Por favor, selecciona el número de personas.');
    }

    if (valid) {
      // Guardar datos en localStorage
      localStorage.setItem('fechainicio', startDate.value);
      localStorage.setItem('fechafin', endDate.value);
      localStorage.setItem('horainicio', startTime.value);
      localStorage.setItem('horafin', endTime.value);
      localStorage.setItem('personas', numPersonas.value);

      // Mostrar datos en el modal
      document.getElementById('modal-start').textContent = `Fecha de inicio: ${startDate.value}`;
      document.getElementById('modal-end').textContent = `Fecha de fin: ${endDate.value}`;
      document.getElementById('modal-start-time').textContent = `Hora de llegada: ${startTime.value}`;
      document.getElementById('modal-end-time').textContent = `Hora de salida: ${endTime.value}`;
      document.getElementById('modal-num-personas').textContent = `Número de personas: ${numPersonas.value}`;

      // Abrir el modal manualmente ya que se previene el envío del formulario
      const modal = new bootstrap.Modal(document.getElementById('reservedConfirmedModal'));
      modal.show();
    } else {
      alert(errorMessages.join('\n')); // Muestra mensajes de error
    }
  });
});
