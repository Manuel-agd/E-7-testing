import { getPuntuacion, setPuntuacion, valorCarta } from './modelo';
import { pideCartas, gameOver, deshabilitarBotones, mostrarBtnNuevaPartida} from './motor';
import { muestraPuntuacion, muestraCarta, muestraMensaje } from './ui';

document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();

    const btnPedirCartas = document.getElementById("pedirCartas") as HTMLButtonElement;
    const btnPlantarse = document.getElementById("plantarse") as HTMLButtonElement;
    const btnNuevaPartida = document.getElementById("nuevaPartida") as HTMLButtonElement;

    btnPedirCartas.addEventListener("click", () => {
        const carta = pideCartas();
        console.log(`Carta pedida: ${carta}`);
        muestraCarta(carta);
        const nuevaPuntuacion = getPuntuacion() + valorCarta(carta);
        setPuntuacion(nuevaPuntuacion);
        muestraPuntuacion();
        gameOver();
    });

    btnPlantarse.addEventListener("click", () => {
        deshabilitarBotones();
        mostrarBtnNuevaPartida();
        const puntuacionActual = getPuntuacion();
        if (puntuacionActual < 4) {
            muestraMensaje("Has sido muy conservador");
        } else if (puntuacionActual === 5) {
            muestraMensaje("Te ha entrado canguelo eh");
        } else if (puntuacionActual === 6 || puntuacionActual === 7) {
            muestraMensaje("Casi, casi...");
        } else if (puntuacionActual === 7.5) {
            muestraMensaje("¡Lo has clavado! ¡Enhorabuena!");
        }
    });

    btnNuevaPartida.addEventListener("click", () => {
        setPuntuacion (0);
        muestraPuntuacion();
        const cartaImg = document.getElementById("carta") as HTMLImageElement;
        cartaImg.src = "/src/imagenes/back.jpg";
        muestraMensaje("");
        btnPedirCartas.disabled = false;
        btnPlantarse.disabled = false;
        btnNuevaPartida.style.display = "none";
    });
});
