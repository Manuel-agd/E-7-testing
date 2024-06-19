import { puntuacion}from './modelo';
import { muestraMensaje } from './ui';

export function pideCartas(): number {
    let carta = Math.floor(Math.random() * 10) +1;
    if (carta > 7) carta +=2;
    return carta;
}

export function gameOver(): void{
    if(puntuacion > 7.5) {
        muestraMensaje("Game Over! Te has pasado de 7.5 puntos");
        deshabilitarBotones();
        mostrarBtnNuevaPartida();
    }
}

export function deshabilitarBotones(): void{
    const btnPedirCartas = document.getElementById("pedirCartas") as HTMLButtonElement;
    const btnPlantarse = document.getElementById("plantarse") as HTMLButtonElement;
    btnPedirCartas.disabled = true;
    btnPlantarse.disabled = true;
}

export function mostrarBtnNuevaPartida(): void{
    const btnNuevaPartida = document.getElementById("nuevaPartida") as HTMLButtonElement;
    btnNuevaPartida.style.display = 'block';
}