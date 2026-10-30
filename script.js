
document.addEventListener("DOMContentLoaded", () => {

    // AÑO AUTOMÁTICO
    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    // CATÁLOGO DE BEBIDAS
    // Ingredientes provisionales para demostración.

    const bebidas = {
        "mojito": {
            nombre: "MOJITO",
            imagen: "imagenes/mojito.jpg",
            descripcion: "Refrescante combinación de hierbabuena y limón.",
            ingredientes: [
                "Ron blanco",
                "Hierbabuena",
                "Limón",
                "Azúcar",
                "Soda",
                "Hielo"
            ]
        },

        "blue-lagoon": {
            nombre: "BLUE LAGOON",
            imagen: "imagenes/blue-lagoon.jpg",
            descripcion: "Cóctel cítrico de color azul intenso.",
            ingredientes: [
                "Vodka",
                "Curaçao azul",
                "Limonada",
                "Hielo"
            ]
        },

        "daiquiri": {
            nombre: "DAIQUIRI DE FRESA",
            imagen: "imagenes/daiquiri.jpg",
            descripcion: "Una mezcla frutal, dulce y refrescante.",
            ingredientes: [
                "Ron blanco",
                "Fresas",
                "Limón",
                "Azúcar",
                "Hielo"
            ]
        },

        "pina-colada": {
            nombre: "PIÑA COLADA",
            imagen: "imagenes/pina-colada.jpg",
            descripcion: "Una combinación tropical de piña y coco.",
            ingredientes: [
                "Ron",
                "Jugo de piña",
                "Crema de coco",
                "Hielo"
            ]
        },

        "margarita": {
            nombre: "MARGARITA",
            imagen: "imagenes/margarita.jpg",
            descripcion: "Un clásico con notas cítricas y refrescantes.",
            ingredientes: [
                "Tequila",
                "Licor de naranja",
                "Limón",
                "Sal",
                "Hielo"
            ]
        },

        "maracuya": {
            nombre: "MARACUYÁ",
            imagen: "imagenes/maracuya.jpg",
            descripcion: "Sabor tropical con un toque ácido.",
            ingredientes: [
                "Pulpa de maracuyá",
                "Vodka o ron",
                "Almíbar",
                "Hielo"
            ]
        }
    };

    // ELEMENTOS DE LA VENTANA EMERGENTE

    const modal = document.getElementById("modal-bebida");
    const cerrar = document.getElementById("cerrar-modal");
    const titulo = document.getElementById("modal-titulo");
    const imagen = document.getElementById("modal-imagen");
    const descripcion = document.getElementById("modal-descripcion");
    const lista = document.getElementById("modal-ingredientes");

    if (modal && cerrar && titulo && imagen &&
        descripcion && lista) {

        // ABRIR LA BEBIDA SELECCIONADA

        document.querySelectorAll("[data-bebida]")
            .forEach(boton => {

                boton.addEventListener("click", () => {

                    const id = boton.dataset.bebida;
                    const bebida = bebidas[id];

                    if (!bebida) {
                        console.warn("Bebida no encontrada:", id);
                        return;
                    }

                    titulo.textContent = bebida.nombre;
                    imagen.src = bebida.imagen;
                    imagen.alt = "Cóctel " + bebida.nombre;
                    descripcion.textContent = bebida.descripcion;

                    // MOSTRAR INGREDIENTES
                    lista.replaceChildren();

                    bebida.ingredientes.forEach(ingrediente => {
                        const elemento = document.createElement("li");
                        elemento.textContent = ingrediente;
                        lista.appendChild(elemento);
                    });

                    modal.showModal();
                });
            });

        // CERRAR CON EL BOTÓN X
        cerrar.addEventListener("click", () => {
            modal.close();
        });

        // CERRAR AL HACER CLIC FUERA
        modal.addEventListener("click", evento => {
            if (evento.target === modal) {
                modal.close();
            }
        });
    }

    console.log("BITTERS 51 - Web V1.0 iniciada correctamente");

});
