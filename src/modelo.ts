export type EstadoPartida = "EnProgreso" | "Gana" | "Pierde" | "NoInciado"; // Type

export interface Carta {
    valor: number;
    url: string;
}

export interface Partida {
    estadoPartida: EstadoPartida;
    carta: Carta;
    puntuacionTotal: number;
    mensaje: string;
}

export const partida: Partida = {
    estadoPartida: "NoInciado",
    carta: {
        valor: 0,
        url: "src/imagenes/back.jpg",
    },
    puntuacionTotal: 0,
    mensaje: "",
};