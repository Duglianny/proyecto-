

document.addEventListener('DOMContentLoaded', function() {

  const email = {
      nombre: '',
      apellidos: '',
      correo: '',
      telefono: '',
      empresa: '',
      select: '',
      comentario: ''

  }

  // Seleccionar los elementos de la interfaz
  const nombre = document.querySelector('#nombre');
  const apellidos = document.querySelector('#Apellidos');
  const correo = document.querySelector('#correo');
  const telefono = document.querySelector('#telefono');
  const empresa = document.querySelector('#empresa');
  const select = document.querySelector('#select')
  const comentario = document.querySelector('#comentario')
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const formulario = document.querySelector('#formulario');

  // Asignar eventos
  nombre.addEventListener('input', validar);
  apellidos.addEventListener('input', validar);
  correo.addEventListener('input', validar);
  telefono.addEventListener('input', validar);
  empresa.addEventListener('input', validar);
  select.addEventListener('input', validar);
  comentario.addEventListener('input', validar)

  formulario.addEventListener('submit', enviarEmail);


  function enviarEmail(e) {
      e.preventDefault();

      setTimeout(() => {

          

          // Crear una alerta
          const alertaExito = document.createElement('P');
          alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
          alertaExito.textContent = 'Mensaje enviado correctamente';

          formulario.appendChild(alertaExito);

          setTimeout(() => {
              alertaExito.remove(); 
          }, 3000);
      }, 3000);
  }
})