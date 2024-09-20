import { partida } from "./modelo"
import { obtenerValorCarta, obtenerCarta, generarNumeroAleatorio, actualizarEstadoPartida, actualizarMesajePartida } from "./motor"
import { vi, describe, expect, it} from "vitest"

describe(" Comprobamos estados del juego 7 y medio " , () => {

    beforeEach (() => {
        partida.estadoPartida = "NoInciado";
        partida.puntuacionTotal = 0; 
    });

    it ("Deberia ganar cuando la puntuacion sea de 7.5" , () =>{
        //Arrange
        partida.puntuacionTotal = 7.5;
        const resultadoEsperado = "Gana"; 

        //Act
         actualizarEstadoPartida(); 

        //Assert
        expect(partida.estadoPartida).toBe(resultadoEsperado);
    });

    it ("Deberia perder cuando la puntuacion es mayor a 7.5", () =>{
        //Arrange
        partida.puntuacionTotal = 8;
        const resultadoEsperado = "Pierde"

        //Act
        actualizarEstadoPartida();

        //Assert
        expect(partida.estadoPartida).toBe(resultadoEsperado);
    });

    it ("Deberia devolver en progreso si la puntuacion esta por de bajo de 7.5", () =>{
        //Arrange
        partida.puntuacionTotal = 7;
        const resultadoEsperado = "EnProgreso";

        //Act
        actualizarEstadoPartida();

        //Assert
        expect(partida.estadoPartida).toBe(resultadoEsperado)
    });
});

describe(" Comprobar mensajes de la partida ", () => {
    it ("Deberia devolver el mensaje correcto cuando la puntuacion es igual a 7.5", () => {
        //Arrange
        const puntuacion : number = 7.5;
        const mensajeEsperado : string = "¡Lo has clavado! ¡Enhorabuena!";

        //Act
        const resultado = actualizarMesajePartida(puntuacion);

        //Assert
        expect(resultado).toBe(mensajeEsperado);
    });

    it("Deberia devolver el mensaje correcto cuando la puntuacion es mayor a 7.5", () => {
        //Arrange
        const puntuacion = 8;
        const mensajeEsperado: string = "Game Over! Te has pasado de 7.5 puntos";

        //Act
        const resultado = actualizarMesajePartida(puntuacion);

        //Assert
        expect(resultado).toBe(mensajeEsperado);
    });

    it("Deberia devolver el mensaje correcto cuando la puntuacion es menor o igual a 4", () => {
        //Arrange
        const puntuacion = 4;
        const mensajeEsperado: string = "Has sido muy conservador";

        //Act
        const resultado = actualizarMesajePartida(puntuacion);

        //Assert
        expect(resultado).toBe(mensajeEsperado);
    })

    it("Deberia devolver el mensaje correcto cuando la puntuacion es igual a 5", () => {
        //Arrange
        const puntuacion = 5;
        const mensajeEsperado: string = "Te ha entrado canguelo eh";

        //Act
        const resultado = actualizarMesajePartida(puntuacion);

        //Assert
        expect(resultado).toBe(mensajeEsperado);
    })

    it("Deberia devolver el mensaje correcto cuando la puntuacion es igual a 6 o 7", () => {
        //Arrange
        const puntuacion = 6;
        const mensajeEsperado : string = "Casi, casi...";

        //Act
        const resultado = actualizarMesajePartida(puntuacion);

        //Assert
        expect(resultado).toBe(mensajeEsperado);

    })

});

describe ("Comprobamos la funcion generarCarta ", () => {
    it("Deberia devolver 1 cuando forzamos a MathRandom el numero 0", () =>{
        //Arrange
        const numeroEsperado = 1;
        const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);
        spyOnMathRandom.mockRestore();
    })

    it("Deberia devolver 10 cuando forzamos a MathRandom el numero 0.99", () =>{
        //Arrange
        const numeroEsperado = 10;
        const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0.99);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);
        spyOnMathRandom.mockRestore();
    })

    it("Deberia ajustar el numero generado si es mayor a 7", () => {
        //Arrange 
        const carta = 8;
        const cartaEsperada = 10;
        //Act
        const resultado = obtenerCarta(carta);

        //Assert
        expect(resultado).toBe(cartaEsperada);
    })

    it("Deberia ajustar el valor de la carta obtenida a 0.5 si la carta es igual o mayor a 10", () => {
        //Arrange
        const carta = 10;
        const valorEsperado = 0.5;

        //Act
        const resultado = obtenerValorCarta(carta);

        //Assert
        expect(resultado).toBe(valorEsperado);
    })

});