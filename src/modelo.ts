export let puntuacion = 0;

export function setPuntuacion(valor: number): void {
    puntuacion = valor;
}

export function getPuntuacion(): number {
    return puntuacion;
}

export function valorCarta(carta: number): number{
    if(carta >= 10) return 0.5;
    return carta;
}