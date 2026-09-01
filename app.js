// ========================================
// ELEMENTOS DE LA PÁGINA
// ========================================

const buscador =
    document.getElementById("buscador");

const tarjetas =
    document.querySelectorAll(".tarjeta");

const botonesFiltro =
    document.querySelectorAll(".filtro");

const contador =
    document.getElementById("contador");

const sinResultados =
    document.getElementById("sin-resultados");


// Filtro seleccionado actualmente

let filtroActual = "todos";



// ========================================
// FILTRAR DINOSAURIOS
// ========================================

function filtrarDinosaurios() {

    const texto =
        buscador.value
            .toLowerCase()
            .trim();


    let cantidadVisible = 0;


    tarjetas.forEach((tarjeta) => {

        const nombre =
            tarjeta
                .querySelector("h3")
                .textContent
                .toLowerCase();


        const categoria =
            tarjeta.dataset.categoria;


        const coincideBusqueda =
            nombre.includes(texto);


        const coincideFiltro =
            filtroActual === "todos" ||
            categoria === filtroActual;


        if (
            coincideBusqueda &&
            coincideFiltro
        ) {

            tarjeta.style.display = "";

            cantidadVisible++;

        }

        else {

            tarjeta.style.display =
                "none";

        }

    });



    // CONTADOR

    contador.textContent =
        cantidadVisible === 1
            ? "Mostrando 1 criatura"
            : `Mostrando ${cantidadVisible} criaturas`;



    // MENSAJE SIN RESULTADOS

    if (cantidadVisible === 0) {

        sinResultados.style.display =
            "block";

    }

    else {

        sinResultados.style.display =
            "none";

    }

}



// ========================================
// BUSCADOR
// ========================================

buscador.addEventListener(
    "input",
    filtrarDinosaurios
);



// ========================================
// BOTONES DE FILTRO
// ========================================

botonesFiltro.forEach((boton) => {

    boton.addEventListener(
        "click",
        () => {

            botonesFiltro.forEach(
                (btn) => {

                    btn.classList.remove(
                        "activo"
                    );

                }
            );


            boton.classList.add(
                "activo"
            );


            filtroActual =
                boton.dataset.filtro;


            filtrarDinosaurios();

        }
    );

});



// ========================================
// INFORMACIÓN DE LAS CRIATURAS
// ========================================

const dinosaurios = {

    trex: {

        nombre:
            "Tyrannosaurus Rex",

        cientifico:
            "Tyrannosaurus rex",

        periodo:
            "Cretácico tardío",

        alimentacion:
            "Carnívoro",

        tamano:
            "12 - 13 metros",

        region:
            "Norteamérica",

        imagen:
            "img/trex.png",

        descripcion:
            "Tyrannosaurus rex fue uno de los mayores depredadores terrestres de finales del Cretácico. Poseía un enorme cráneo, poderosas mandíbulas y fuertes patas traseras."

    },


    triceratops: {

        nombre:
            "Triceratops",

        cientifico:
            "Triceratops horridus",

        periodo:
            "Cretácico tardío",

        alimentacion:
            "Herbívoro",

        tamano:
            "8 - 9 metros",

        region:
            "Norteamérica",

        imagen:
            "img/triceratops.jpg",

        descripcion:
            "Triceratops fue un dinosaurio herbívoro caracterizado por sus tres cuernos y una gran gola ósea situada detrás de su cabeza."

    },


    velociraptor: {

        nombre:
            "Velociraptor",

        cientifico:
            "Velociraptor mongoliensis",

        periodo:
            "Cretácico tardío",

        alimentacion:
            "Carnívoro",

        tamano:
            "Aproximadamente 2 metros",

        region:
            "Asia",

        imagen:
            "img/velociraptor.jpg",

        descripcion:
            "Velociraptor era considerablemente más pequeño que muchas representaciones cinematográficas. Poseía plumas y una característica garra curvada en cada pie."

    },


    stegosaurus: {

        nombre:
            "Stegosaurus",

        cientifico:
            "Stegosaurus stenops",

        periodo:
            "Jurásico tardío",

        alimentacion:
            "Herbívoro",

        tamano:
            "Aproximadamente 7 metros",

        region:
            "Norteamérica",

        imagen:
            "img/stegosaurus.jpg",

        descripcion:
            "Stegosaurus se caracterizaba por las grandes placas que recorrían su espalda y las púas presentes en el extremo de su cola."

    },


    brachiosaurus: {

        nombre:
            "Brachiosaurus",

        cientifico:
            "Brachiosaurus altithorax",

        periodo:
            "Jurásico tardío",

        alimentacion:
            "Herbívoro",

        tamano:
            "Cerca de 20 metros",

        region:
            "Norteamérica",

        imagen:
            "img/brachiosaurus.jpg",

        descripcion:
            "Brachiosaurus fue un gigantesco saurópodo con patas delanteras proporcionalmente largas y un cuello que le permitía alcanzar vegetación elevada."

    },


    spinosaurus: {

        nombre:
            "Spinosaurus",

        cientifico:
            "Spinosaurus aegyptiacus",

        periodo:
            "Cretácico",

        alimentacion:
            "Carnívoro",

        tamano:
            "Alrededor de 14 metros",

        region:
            "África",

        imagen:
            "img/spinosaurus.jpg",

        descripcion:
            "Spinosaurus fue un enorme dinosaurio terópodo caracterizado por su hocico alargado y las largas espinas neurales que formaban una estructura sobre su espalda."

    },


    troodon: {

        nombre:
            "Troodon",

        cientifico:
            "Troodon formosus",

        periodo:
            "Cretácico",

        alimentacion:
            "Omnívoro / incierto",

        tamano:
            "Aproximadamente 2 metros",

        region:
            "Norteamérica",

        imagen:
            "img/troodon.jpg",

        descripcion:
            "Troodon es un nombre históricamente utilizado para fósiles de pequeños terópodos. Su clasificación ha sido revisada y discutida por los paleontólogos."

    },


    quetzalcoatlus: {

        nombre:
            "Quetzalcoatlus",

        cientifico:
            "Quetzalcoatlus northropi",

        periodo:
            "Cretácico tardío",

        alimentacion:
            "Carnívoro",

        tamano:
            "Cerca de 10 metros de envergadura",

        region:
            "Norteamérica",

        imagen:
            "img/quetzalcoatlus.png",

        descripcion:
            "Quetzalcoatlus fue uno de los pterosaurios más grandes conocidos. Aunque convivió con dinosaurios, técnicamente no era un dinosaurio sino un reptil volador."

    }

};



// ========================================
// MODAL
// ========================================

const modal =
    document.getElementById("modal");

const cerrarModal =
    document.getElementById("cerrar-modal");

const fondoModal =
    document.querySelector(".modal-fondo");


const modalImagen =
    document.getElementById("modal-imagen");

const modalNombre =
    document.getElementById("modal-nombre");

const modalCientifico =
    document.getElementById("modal-cientifico");

const modalPeriodo =
    document.getElementById("modal-periodo");

const modalDescripcion =
    document.getElementById("modal-descripcion");

const modalAlimentacion =
    document.getElementById("modal-alimentacion");

const modalTamano =
    document.getElementById("modal-tamano");

const modalRegion =
    document.getElementById("modal-region");



// BOTONES VER INFORMACIÓN

document
    .querySelectorAll(".ver-mas")
    .forEach((boton) => {

        boton.addEventListener(
            "click",
            () => {

                const id =
                    boton.dataset.dino;


                const dino =
                    dinosaurios[id];


                modalImagen.src =
                    dino.imagen;


                modalImagen.alt =
                    dino.nombre;


                modalNombre.textContent =
                    dino.nombre;


                modalCientifico.textContent =
                    dino.cientifico;


                modalPeriodo.textContent =
                    dino.periodo;


                modalDescripcion.textContent =
                    dino.descripcion;


                modalAlimentacion.textContent =
                    dino.alimentacion;


                modalTamano.textContent =
                    dino.tamano;


                modalRegion.textContent =
                    dino.region;


                modal.classList.add(
                    "abierto"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });



// ========================================
// CERRAR MODAL
// ========================================

function cerrarVentana() {

    modal.classList.remove(
        "abierto"
    );


    document.body.style.overflow =
        "";

}


cerrarModal.addEventListener(
    "click",
    cerrarVentana
);


fondoModal.addEventListener(
    "click",
    cerrarVentana
);



// CERRAR CON ESC

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape"
        ) {

            cerrarVentana();

        }

    }
);
// ========================================
// MENÚ HAMBURGUESA CELULAR
// ========================================

const menuToggle =
    document.getElementById("menu-toggle");

const menu =
    document.getElementById("menu");


menuToggle.addEventListener("click", () => {

    menu.classList.toggle("activo");


    if (menu.classList.contains("activo")) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";

    }

});


// CERRAR MENÚ AL ELEGIR UNA OPCIÓN

document
    .querySelectorAll(".menu a")
    .forEach((enlace) => {

        enlace.addEventListener("click", () => {

            menu.classList.remove("activo");

            menuToggle.textContent = "☰";

        });

    });