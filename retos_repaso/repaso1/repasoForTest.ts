import { arrayInvertido, colorEnArcoiris, mostrarImpares, muestraParImpar, sumaCaracteres } from "./repasoFor";

// Probar función mostrarImpares
let num: number = 30;
mostrarImpares(num);

// probar función arrayInvertido
let arrayNumber: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayInvertido(arrayNumber));
let arrayString: string[] = ["Asia", "Africa", "América", "Europa", "Oceanía"];
console.log(arrayInvertido(arrayString));

// Probar funcion colorEnArcoiris
let colores: string[] = ["Rosa", "Violeta", "Añil", "Morado", "Gris", "Azul", "Verde", "Dorado"];
colorEnArcoiris(colores);

// Probar función sumaCaracteres
let arrayPalabras: string[] = ["Hola, ", "?", "que", "tal", "estais", "todos", "?"];
console.log("Total de caracteres:", sumaCaracteres(arrayPalabras));

// Probar función muestraParImpar
let numero: number = 64;
muestraParImpar(numero);
numero = 13;
muestraParImpar(numero);

// Probar sumaCaracteres y muestraParImpar para un único proposito
let arrayPalabras1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let arrayPalabras2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arrayPalabras3 = ["Venezuela", "Veneno", "Voltaje"];
muestraParImpar(sumaCaracteres(arrayPalabras1) +
                sumaCaracteres(arrayPalabras2) +
                sumaCaracteres(arrayPalabras3));