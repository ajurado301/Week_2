
// Importar clases
import { Book } from './book';
import { Library } from './library';

// Crear array de libros (Book[])
let libros: Book[] = [
    new Book("Introducción a la programación", 148, "978-0241420546", "Carol Vorderman", "DK"),
    new Book("TypeScript para principiantes", 148, "979-8713181239", "Claudia Alves", "Independently"),
    new Book("Por si las voces vuelven", 256, "978-8408249214", "Angel Martín", "Editorial Planeta"),
    new Book("Nunca", 840, "978-8401027055", "Ken Follett", "Plaza & Janes"),
    new Book("De ninguna parte", 416, "978-8401024924", "Julia Navarro", "Plaza & Janes"),
    new Book("El mercader de libros", 608, "978-8466667005", "Luis Zueco", "Ediciones B"),
    new Book("La caida de los gigantes", 1017, "978-8401337635", "Ken Follett", "Plaza & Janes"),
];

// Crear libreria (Library)
let miLibreria: Library = new Library(libros, "Calle provisional, 1", "Manager provisional");

// getters y setters
// address
console.log(miLibreria.getAddress()); // mostramos valor actual
miLibreria.setAddress("Calle Principal, 10"); // modificamos valor
console.log(miLibreria.getAddress()); // mostramos nuevo valor
// manager
console.log(miLibreria.getManager()); // mostramos valor actual
miLibreria.setManager("Pedro Fuertes"); // modificamos valor
console.log(miLibreria.getManager()); // mostramos nuevo valor

// Métodos
// toString
console.log(miLibreria.toString());
// getNumberOfBooks
console.log(miLibreria.getNumberOfBooks());
// findByAuthor
console.log(miLibreria.findByAuthor("Ken Follett"));




