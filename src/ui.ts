import {puntuacion} from './modelo';

export function muestraPuntuacion(): void {
    const puntuacionDiv = document.getElementById("puntuacion") as HTMLElement;
    puntuacionDiv.textContent = `Puntuación: ${puntuacion}`; 
}

export function muestraCarta (carta: number): void {
    const cartaImg = document.getElementById("carta") as HTMLImageElement;
    const cartaURL = `/src/imagenes/${carta}.jpg`;
    cartaImg.src = cartaURL;
}

export function muestraMensaje (mensaje: string): void{
    const mensajeDiv = document.getElementById("mensaje") as HTMLElement;
    mensajeDiv.textContent = mensaje;
}