
// Importar clase Vector
import { Vector } from './vector';

// Instanciamos
let LongArray: number = 5;
let maxAleatorio: number = 9
let vector1: Vector = new Vector(LongArray, maxAleatorio);
let vector2: Vector = new Vector(LongArray, maxAleatorio);
let vectorResultante: Vector;

console.log("\nMétodo add()");
console.log("elements de vector1:");
console.log(vector1.getElements());
console.log("elements de vector2:");
console.log(vector2.getElements());
console.log("elements de vectorResultante después de add():");
vectorResultante = vector1.add(vector2);
console.log(vectorResultante.getElements());

console.log("\nMétodo subs()");
console.log("elements de vector1:");
console.log(vector1.getElements());
console.log("elements de vector2:");
console.log(vector2.getElements());
console.log("elements de vectorResultante después de subs():");
vectorResultante = vector1.subs(vector2);
console.log(vectorResultante.getElements());

console.log("\nMétodo mult()");
console.log("elements de vector1:");
console.log(vector1.getElements());
console.log("elements de vector2:");
console.log(vector2.getElements());
console.log("elements de vectorResultante después de mult():");
vectorResultante = vector1.mult(vector2);
console.log(vectorResultante.getElements());

let multiplicador: number = 5;
console.log("\nMétodo multNumber()");
console.log("elements de vector1:");
console.log(vector1.getElements());
console.log("elements de vectorResultante después de multNumber() con multiplicador:", multiplicador);
vectorResultante = vector1.multNumber(multiplicador);
console.log(vectorResultante.getElements());

