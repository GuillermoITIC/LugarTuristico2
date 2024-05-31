document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de lugares de interés
    const formLugares = document.getElementById('form-lugares');

    // Agregar un evento de escucha para el envío del formulario
    formLugares.addEventListener('submit', function(event) {
        // Prevenir el comportamiento predeterminado de envío del formulario
        event.preventDefault();

        // Obtener el valor seleccionado del formulario
        const lugarSeleccionado = formLugares.querySelector('select[name="lugar"]').value;

        // Verificar si se ha seleccionado un lugar válido
        if (lugarSeleccionado) {
            // Construir la URL de destino basada en el lugar seleccionado
            let urlDestino = lugarSeleccionado + '.html';

            // Abrir una nueva pestaña con la URL de destino
            window.open(urlDestino, '_blank');
        } else {
            // Mostrar un mensaje de error si no se ha seleccionado ningún lugar
            alert('Por favor, selecciona un lugar de interés.');
        }
    });
    function cambiarColor() {
        const color = document.getElementById('colores').value;
        document.body.className = color;
    }
});
