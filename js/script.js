let diapositivaActual = 0;

// busca las clases myslides y dot y las guarda
const diapositivas = document.getElementsByClassName("mySlides");
const puntos = document.getElementsByClassName("dot");

mostrarDiapositiva(diapositivaActual);

function cambiarDiapositiva(direccion) {
    diapositivaActual += direccion;

    // SI se sale de las dispo vuelve a la diapo 0 
    if (diapositivaActual >= diapositivas.length) {
        diapositivaActual = 0;
    }

    if (diapositivaActual < 0) {
        diapositivaActual = diapositivas.length - 1;
    }

    mostrarDiapositiva(diapositivaActual);
}

function irADiapositiva(numero) {
    diapositivaActual = numero - 1;
    mostrarDiapositiva(diapositivaActual);
}

function mostrarDiapositiva(indice) {

    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }

    for (let i = 0; i < puntos.length; i++) {
        puntos[i].classList.remove("active");
    }

    //Muestra la slide actual
    diapositivas[indice].style.display = "block";
    //activa el pto correcto
    puntos[indice].classList.add("active");
}

/* AUTOPLAY */
setInterval(() => {
    cambiarDiapositiva(1);
}, 4000);