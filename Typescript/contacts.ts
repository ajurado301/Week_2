
// Importamos clase Person
import { Person } from './person';

export class Contacts {

    // Atributo
    public people: Person[];

    // Constructor
    constructor() {
        this.people = [];
    }

    // Método
    public printCalendar(): void {
        let anyoActual: number = new Date().getFullYear();
        this.people.forEach((contacto, indice) => {
            console.log("\nContacto número:", indice + 1);
            console.log("Nombre:", contacto.name);
            console.log("Dirección:", contacto.getAddress());
            console.log("Edad:", contacto.age);
            console.log("Año nacimiento:", contacto.yearOfBirth(anyoActual));
        })
    }
}