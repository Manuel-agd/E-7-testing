const estiloartista = "color: green; font-size: 20px; font-weigth: bold";

interface Grupomusical {
    artista: string;
    fundacion: number;
    activo: boolean;
    genero: string;
};

const grupo1 : Grupomusical = {
    artista: "The Beatles",
    fundacion: 1960,
    activo: true,
    genero: "Pop Rock",
};
console.log("%cThe Beatles", estiloartista);
console.log (grupo1);

const grupo2 : Grupomusical = {
    artista: "Queen",
    fundacion: 1970,
    activo: false,
    genero: "Rock",
};
console.log("%cQueen", estiloartista);
console.log(grupo2);

const grupo3 : Grupomusical = {
    artista: "ACDC",
    fundacion: 1973,
    activo: true,
    genero: "Hard Rock",
};
console.log("%cACDC", estiloartista);
console.log(grupo3);

const grupo4 : Grupomusical = {
    artista: "Ludwig Van Beethoven",
    fundacion: 1770,
    activo: false,
    genero: "Clasica",
};
console.log("%cLudwig Van Beethoven", estiloartista);
console.log(grupo4);

const grupo5 : Grupomusical = {
    artista: "The Rolling Stones",
    fundacion: 1962,
    activo: true,
    genero: "Rock",
};
console.log("%cThe Rolling Stones", estiloartista);
console.log(grupo5); 
