import { partida, Carta } from "./modelo";

export const generarNumeroAleatorio = (): number =>
    Math.floor(Math.random() * 10) + 1;

export const obtenerCarta = (numeroCarta: number): number => {
    if (numeroCarta > 7) {
        return numeroCarta + 2;
    }
    return numeroCarta;
};

export const obtenerValorCarta = (numeroCarta: number): number => {
    let valorCarta = numeroCarta;

    if (numeroCarta >= 10) {
        valorCarta = 0.5;
    }

    return valorCarta;
};

export const obtenerUrlCarta = (numeroCarta: number): string => {
    switch (numeroCarta) {
        case 1:
            return "src/imagenes/1.jpg";
        case 2:
            return "src/imagenes/2.jpg";
        case 3:
            return "src/imagenes/3.jpg";
        case 4:
            return "src/imagenes/4.jpg";
        case 5:
            return "src/imagenes/5.jpg";
        case 6:
            return "src/imagenes/6.jpg";
        case 7:
            return "src/imagenes/7.jpg";
        case 10:
            return "src/imagenes/10.jpg";
        case 11:
            return "src/imagenes/11.jpg";
        case 12:
            return "src/imagenes/12.jpg";
        default:
            return "src/imagenes/back.jpg";
    }
};

export const generarCarta = (): Carta => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = obtenerCarta(numeroAleatorio);
    const valorCarta = obtenerValorCarta(carta);
    const url = obtenerUrlCarta(valorCarta);

    const cartaActual: Carta = {
        valor: valorCarta,
        url,
    };

    return cartaActual;
};

export const actualizarPuntuacionTotal = (carta: Carta): void => {
    partida.puntuacionTotal = partida.puntuacionTotal + carta.valor;
};

export const actualizarEstadoPartida = () => {
    if (partida.puntuacionTotal === 7.5) {
        partida.estadoPartida = "Gana";

    } else if (partida.puntuacionTotal > 7.5) {
        partida.estadoPartida = "Pierde";
        
    } else {
        partida.estadoPartida = "EnProgreso";
        
    }
};

export const actualizarMesajePartida = (puntuacionTotal : number) : string => {
    let mensaje = "";
    switch (true) {
        case puntuacionTotal === 7.5:
            mensaje = "¡Lo has clavado! ¡Enhorabuena!";
            break;
        case puntuacionTotal> 7.5:
            mensaje = "Game Over! Te has pasado de 7.5 puntos";
            break;
        case puntuacionTotal<= 4:
            mensaje = "Has sido muy conservador";
            break;
        case puntuacionTotal=== 5:
            mensaje = "Te ha entrado canguelo eh";
            break;
        case puntuacionTotal=== 6 || puntuacionTotal === 7:
            mensaje = "Casi, casi...";
            break;
        default:
            mensaje = "";
    }
    return mensaje;
};

export const reiniciarPartida = (): void => {
    partida.estadoPartida = "EnProgreso";
    partida.puntuacionTotal = 0;
    partida.carta = {
        valor: 0,
        url: "src/imagenes/back.jpg",
    };
    partida.mensaje = "";
};
