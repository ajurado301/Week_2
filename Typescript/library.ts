
// Importar clase Book
import { Book } from './book';

// Clase Library
export class Library {

    // Atributos
    private books: Book[];
    private address: string;
    private manager: string;

    // Constructor
    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this. manager = manager
    }

    // getters y setters
    // address
    public getAddress(): string { return this.address };
    public setAddress(address: string): void { this.address = address };
    // manager
    public getManager(): string { return this.manager };
    public setManager(manager: string): void { this.manager = manager };

    // Métodos
    // toString
    public toString(): string {
        let result: string = "";
        this.books.forEach((libro, indice) => {
            result += ((indice != 0) ? "\n" : "") +libro.toString(); // salto de línea al principio de cada libro excepto en el primero
        });
        return result;
    }
    // getNumberOfBooks
    public getNumberOfBooks(): number {
        return this.books.length;
    }
    // findByAuthor
    public findByAuthor(author: string): Book[] {
        let result: Book[] = [];
        result = this.books.filter((libro) => { return author == libro.getAuthor() });
        return result;
    }
}