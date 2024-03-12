const estiloartista = "background: green; font-size: 20px; font-weight: bold";

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

console.log(`%c${grupo1.artista}`, estiloartista);
console.log("Año de fundación:", grupo1.fundacion);
console.log("En activo:", grupo1.activo);
console.log("Género musical:", grupo1.genero);

const grupo2 : Grupomusical = {
    artista: "Queen",
    fundacion: 1970,
    activo: false,
    genero: "Rock",
};
console.log(`%c${grupo2.artista}`, estiloartista);
console.log("Año de fundación:", grupo2.fundacion);
console.log("En activo:", grupo2.activo);
console.log("Género musical:", grupo2.genero);

const grupo3 : Grupomusical = {
    artista: "ACDC",
    fundacion: 1973,
    activo: true,
    genero: "Hard Rock",
};
console.log(`%c${grupo3.artista}`, estiloartista);
console.log("Año de fundación:", grupo3.fundacion);
console.log("En activo:", grupo3.activo);
console.log("Género musical:", grupo3.genero);

const grupo4 : Grupomusical = {
    artista: "Ludwig Van Beethoven",
    fundacion: 1770,
    activo: false,
    genero: "Clasica",
};
console.log(`%c${grupo4.artista}`, estiloartista);
console.log("Año de fundación:", grupo4.fundacion);
console.log("En activo:", grupo4.activo);
console.log("Género musical:", grupo4.genero);

const grupo5 : Grupomusical = {
    artista: "The Rolling Stones",
    fundacion: 1962,
    activo: true,
    genero: "Rock",
};
console.log(`%c${grupo5.artista}`, estiloartista);
console.log("Año de fundación:", grupo5.fundacion);
console.log("En activo:", grupo5.activo);
console.log("Género musical:", grupo5.genero);

