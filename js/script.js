document.addEventListener('DOMContentLoaded', function() {
    // Función para cambiar el color de fondo
    function cambiarColor() {
        const color = document.getElementById('colores').value;
        document.body.className = color;
    }

    function mostrarInfo(lugar) {
        let info;
        switch (lugar) {
            case 'prismas':
                info = "Formadas por columnas de basalto hexagonales, estas cascadas ofrecen un espectáculo natural impresionante. Cómo llegar: Desde el centro de Huasca de Ocampo, puedes tomar un taxi o conducir aproximadamente 20 minutos hacia el noreste. Las señalizaciones en el camino te guiarán directamente a los Prismas Basálticos.";
                break;
            case 'san_miguel':
                info = "Una antigua hacienda minera fundada en el siglo XVIII, ofrece una experiencia única de la arquitectura y vida colonial. Cómo llegar: La hacienda se encuentra a unos 15 minutos en coche desde el centro de Huasca de Ocampo. Puedes llegar siguiendo las señales hacia la Hacienda San Miguel Regla, ubicada en las afueras del pueblo.";
                break;
            case 'presa':
                info = "Ideal para actividades recreativas como la pesca y paseos en bote, ofreciendo un paisaje natural hermoso y tranquilo. Cómo llegar: Desde el centro de Huasca de Ocampo, dirígete al oeste por la carretera principal. La presa está a unos 10 minutos en coche y está bien señalizada.";
                break;
            case 'santa_maria':
                info = "Otra antigua hacienda minera con impresionantes edificios coloniales y hermosos jardines. Cómo llegar: La hacienda se encuentra a unos 15 minutos en coche desde el centro de Huasca de Ocampo. Puedes llegar siguiendo las señales hacia la Hacienda Santa Maria Regla, ubicada en las afueras del pueblo.";
                break;
            default:
                info = "Información no disponible.";
        }
        alert(info);
    }

    function buscar() {
        const input = document.getElementById('search').value.toLowerCase();
        const lugares = {
            'prismas basálticos': 'Formadas por columnas de basalto hexagonales, estas cascadas ofrecen un espectáculo natural impresionante.',
            'san miguel regla': 'Una antigua hacienda minera fundada en el siglo XVIII, ofrece una experiencia única de la arquitectura y vida colonial.',
            'presa san antonio': 'Ideal para actividades recreativas como la pesca y paseos en bote, ofreciendo un paisaje natural hermoso y tranquilo.',
            'hacienda santa maria': 'Otra antigua hacienda minera con impresionantes edificios coloniales y hermosos jardines.',
        };
        const info = lugares[input] || 'Lugar no encontrado. Intente con otro nombre.';
        alert(info);
    }

    document.getElementById('colores').addEventListener('change', cambiarColor);

    document.getElementById('translate-es').addEventListener('click', function() {
        document.body.lang = 'es';
        alert('Página traducida al español');
    });

    document.getElementById('translate-en').addEventListener('click', function() {
        document.body.lang = 'en';
        alert('Page translated to English');
    });

    function actualizarContadorVisitas() {
        let visitas = localStorage.getItem('visitas') || 0;
        visitas = parseInt(visitas) + 1;
        localStorage.setItem('visitas', visitas);
        document.getElementById('visitas-contador').textContent = visitas;
        console.log('Visitas:', visitas);

        // Si se alcanza el límite de 100000 visitas, mostrar un mensaje y deshabilitar el contador
        if (visitas >= 100000) {
            alert('Se ha alcanzado el límite de 100000 visitas. Gracias por visitar nuestro sitio.');
            document.getElementById('contador-visitas').style.display = 'none';
        }
    }

    actualizarContadorVisitas();


    // Función para alternar entre dos imágenes cada 5 segundos
    setInterval(function() {
        var image1 = document.getElementById('image1');
        var image2 = document.getElementById('image2');

        if (image1.style.display !== 'none') {
            image1.style.display = 'none';
            image2.style.display = 'block';
        } else {
            image1.style.display = 'block';
            image2.style.display = 'none';
        }
    }, 5000); // Cambio de imagen cada 5 segundos (5000 milisegundos)
});