import { Punto } from './punto';
import { Triangulo } from './triangulo';

// Instanciar
let punto1: Punto = new Punto(20, 14);
let punto2: Punto = new Punto(-13, 9);
let punto3: Punto = new Punto(-8, -11);
let punto4: Punto = new Punto(18, -5);
let punto5: Punto = new Punto(0, 100);
let punto6: Punto = new Punto(100, 0);
let punto7: Punto = new Punto(0, 0);

// Imprimir punto
console.log(punto1.toString());

// Probar método distanciaAlOrigen
console.log("Distancia a origen desde el punto:", punto1.toString());
console.log(punto1.distanciaAlOrigen());

// Probar método calcularDistancia
console.log("Distancia entre los punto:", punto1.toString(), punto2.toString());
console.log(punto1.calcularDistancia(punto2));

// Creamos una matriz de puntos
let arrayPuntos: Punto[] = [punto2, punto3, punto4, punto5, punto6, punto7];

// Probar método calcularCuadrante
console.log("Cuadrante para el punto:", punto1.toString()); // est muestro a parte ya que no está en el array
console.log(punto1.calcularCuadrante());
arrayPuntos.forEach((punto, indice) => {
    console.log("Cuadrante para el punto:", punto.toString());
    console.log(punto.calcularCuadrante());
});

// Probar método calcularMasCercano
// Mostramos los puntos del array
console.log("Array de puntos:");
console.log(arrayPuntos);
// let cadenaPuntos: string = "";
// arrayPuntos.forEach((punto) => {
//     cadenaPuntos += punto.toString() + " ";
// });
// console.log(cadenaPuntos.trim());
// Mostrar el más cercano a punto1
console.log("Punto más cercano a:", punto1.toString());
console.log(punto1.calcularMasCercano(arrayPuntos).toString());

// Instanciar
let triangulo: Triangulo = new Triangulo(arrayPuntos[0], arrayPuntos[1], arrayPuntos[2]);

// Probar método calcularLongitudLados
console.log("Para un triángulo con estos vertices:");
console.log(triangulo);
console.log("La distancia de sus lados son:");
console.log(triangulo.calcularLongitudLados());