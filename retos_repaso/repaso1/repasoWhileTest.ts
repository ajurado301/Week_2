import { contienePar, continente, primeraLetraM } from "./repasoWhile";

// Probar función continente
let pais: string = "España";
console.log(continente(pais));

// Probar función contienePar
let arrayNumber = [15, 4, 29, 71, 53, 37]; // Reutilizamos variable
console.log("¿Contiene par?:", contienePar(arrayNumber));

// Probar función primeraLetraM
let arrayNombres: string[] = ["Marta", "Pedro", "Manolo", "María", "Merche", "Mikel"];
console.log("¿Empiezan todos por 'M'?:", primeraLetraM(arrayNombres));
