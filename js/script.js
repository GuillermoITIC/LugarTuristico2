document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario de lugares de interés
    const formLugares = document.getElementById('form-lugares');

    if (formLugares) {
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
    }

    // Función para cambiar el color de fondo
    window.cambiarColor = function() {
        const color = document.getElementById('colores').value;
        document.body.className = color;
    }

    function calificarCuestionario() {
        const respuestasCorrectas = {
            pregunta1: 'XVIII',
            pregunta2: 'Santa María Regla',
            pregunta3: 'San Antonio Regla',
            pregunta4: 'Hidalgo',
            pregunta5: 'Senderismo',
            pregunta6: 'San Miguel Regla',
            pregunta7: 'Talleres de artesanía',
            pregunta8: 'Siglo XVIII',
            pregunta9: 'Santa María Regla'
        };

        let puntaje = 0;
        const nombre = document.getElementById('nombre').value;
        
        for (let pregunta in respuestasCorrectas) {
            const opciones = document.getElementsByName(pregunta);
            for (let i = 0; i < opciones.length; i++) {
                if (opciones[i].checked && opciones[i].value === respuestasCorrectas[pregunta]) {
                    puntaje++;
                }
            }
        }
        
        const resultado = document.getElementById('resultado');
        resultado.textContent = `${nombre}, has obtenido ${puntaje} de 9 puntos.`;
        guardarResultado(nombre, puntaje);
    }

    function guardarResultado(nombre, puntaje) {
        const resultadosPrevios = document.getElementById('resultados-previos');
        const li = document.createElement('li');
        li.textContent = `${nombre}: ${puntaje} puntos`;
        resultadosPrevios.appendChild(li);
    }

    document.getElementById('cuestionario').addEventListener('submit', function(event) {
        event.preventDefault();
        calificarCuestionario();
    });

    document.getElementById('colores').addEventListener('change', cambiarColor);

    // Función para actualizar y mostrar el contador de visitas
    function actualizarContadorVisitas() {
        const visitCounter = document.getElementById('visit-counter');
        let visitas = localStorage.getItem('visitas') || 0;
        visitas = parseInt(visitas) + 1;
        localStorage.setItem('visitas', visitas);
        visitCounter.textContent = visitas;
    }

    // Llamar a la función para actualizar el contador de visitas
    actualizarContadorVisitas();
});
