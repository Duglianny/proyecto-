

document.addEventListener('DOMContentLoaded', function() {

  /*const email = {
      nombre: '',
      apellidos: '',
      correo: '',
      telefono: '',
      estimado: '',
      comentario: ''

  }*/

  // Seleccionar los elementos de la interfaz
  const nombre = document.querySelector('#nombre');
  const apellidos = document.querySelector('#Apellidos');
  const correo = document.querySelector('#correo');
  const telefono = document.querySelector('#telefono');
  const estimado = document.querySelector('#estimado')
  const comentario = document.querySelector('#comentario')
  const formulario = document.querySelector('#formulario');

  // Asignar eventos

  formulario.addEventListener('submit', enviarEmail);

    async  function enviarEmail(e) {
    e.preventDefault();

    if(nombre.value === '' || apellidos.value === '' ||  correo.value === '' || telefono.value === '' || estimado.value === '' || comentario.value === '') {
        return mensajeAlerta('Hubo un error', 'error')
    }

    const data = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        correo: correo.value,
        telefono: telefono.value,
        estimado: estimado.value,
        comentario: comentario.value,
    }

    try {
        await fetch('http://191.96.231.2:10010/mensaje', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        mensajeAlerta('Enviado Correctamente', 'success')
    } catch (error) {
        console.log(error)
        return mensajeAlerta('Hubo un error de conexion', 'error')
    }
}

// Crear una alerta
    function mensajeAlerta(mensaje, tipo) {
    const alerta = document.createElement('P');

    alerta.classList.add(
        'text-white',
        'p-2',
        'text-center',
        'rounded-4',
        'mt-4',
        'fw-bold',
        'text-uppercase'
    );

    if(tipo === 'error') {
        alerta.classList.add('bg-danger')
    } else if (tipo === 'success') {
        alerta.classList.add('bg-success')
    }

    alerta.textContent = mensaje;

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
  



















})