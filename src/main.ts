let puntuacion = 0;

function muestraPuntuacion(): void {
    const puntuacionDiv = document.getElementById("puntuacion") as HTMLElement;
    puntuacionDiv.textContent = `Puntuación: ${puntuacion}`; 
};

function pideCartas(): number {
    let carta = Math.floor(Math.random() * 10) +1;
    if (carta > 7) carta +=2;
    return carta;
}

const btnPedirCartas = document.getElementById("pedirCartas") as HTMLButtonElement;
btnPedirCartas.addEventListener("click", () => {
    const carta = pideCartas();
    console.log(`Carta pedida: ${carta}`)
})

function muestraCarta (carta: number): void {
    const cartaImg = document.getElementById("carta") as HTMLImageElement;
    const cartaURL = `/src/imagenes/${carta}.jpg`;
    cartaImg.src = cartaURL;
}

btnPedirCartas.addEventListener("click" ,() => {
    const carta = pideCartas();
    console.log(`Carta pedida: ${carta}`);
    muestraCarta(carta);
    puntuacion += valorCarta(carta);
    muestraPuntuacion();
    gameOver();
})

function valorCarta(carta:number): number {
    if (carta >= 10) return 0.5;
    return carta;
}
/*btnPedirCartas.addEventListener("click", ()=>{
    const carta = pideCartas();
    console.log(`Carta pedida: ${carta}`);
    muestraCarta(carta);
    puntuacion += valorCarta(carta);
    muestraPuntuacion();
});*/

function gameOver(): void{
    const mensajeDiv = document.getElementById("mensaje") as HTMLElement;
    if(puntuacion > 7.5) {
        mensajeDiv.textContent = "Game Over! Te has pasado de 7.5 puntos";
        btnPedirCartas.disabled = true;
        btnPlantarse.disabled = true;
        btnNuevaPartida.style.display = 'block';
    }
}

const btnPlantarse = document.getElementById("plantarse") as HTMLButtonElement;
btnPlantarse.addEventListener("click", () =>{
    const mensajeDiv = document.getElementById("mensaje") as HTMLElement;
    btnPedirCartas.disabled = true;
    btnPlantarse.disabled = true;
    btnNuevaPartida.style.display = 'block';

    if (puntuacion < 4) {
        mensajeDiv.textContent = "Has sido muy conservador";
    }
    else if (puntuacion === 5){
        mensajeDiv.textContent = "Te ha entrado canguelo eh";
    }
    else if (puntuacion === 6 || puntuacion === 7){
        mensajeDiv.textContent = "Casi, casi..."
    }
    else if (puntuacion === 7.5){
        mensajeDiv.textContent = "¡Lo has clavado! ¡Enhorabuena!";
    }
});

const btnNuevaPartida = document.getElementById("nuevaPartida") as HTMLButtonElement;
btnNuevaPartida.addEventListener("click", () => {
    puntuacion = 0;
    muestraPuntuacion();
    const cartaImg = document.getElementById("carta") as HTMLImageElement;
    cartaImg.src = "/src/imagenes/back.jpg";
    const mensajeDiv = document.getElementById("mensaje") as HTMLElement;
    mensajeDiv.textContent = "";
    btnPedirCartas.disabled = false;
    btnPlantarse.disabled = false;
    btnNuevaPartida.style.display = "none";
});

