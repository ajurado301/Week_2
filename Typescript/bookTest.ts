
// Importar clase Book
import { Book } from './book';

// Instanciar
let miLibro: Book = new Book("Introducción a la programación", 148, "9780241420546", "Carol Vorderman", "DK");

// Probamos getters y setters
// title
console.log(miLibro.getTitle()); // mostramos su valor actual
miLibro.setTitle("TypeScript para principiantes"); // cambiamos el valor
console.log(miLibro.getTitle()); // mostramos su valor modificado
// nPages
console.log(miLibro.getNPages()); // mostramos su valor actual
miLibro.setNPages(172); // cambiamos el valor
console.log(miLibro.getNPages()); // mostramos su valor modificado
// isbn
console.log(miLibro.getIsbn()); // mostramos su valor actual
miLibro.setIsbn("9798713181239"); // cambiamos el valor
console.log(miLibro.getIsbn()); // mostramos su valor modificado
// author
console.log(miLibro.getAuthor()); // mostramos su valor actual
miLibro.setAuthor("Claudia Alves"); // cambiamos el valor
console.log(miLibro.getAuthor()); // mostramos su valor modificado
// editroial
console.log(miLibro.getEditorial()); // mostramos su valor actual
miLibro.setEditorial("Independently"); // cambiamos el valor
console.log(miLibro.getEditorial()); // mostramos su valor modificado

// Probamos métodos
console.log(miLibro.toString());
