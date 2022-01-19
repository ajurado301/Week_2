
// Clase Book
export class Book {

    // Atributos
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    // Constructor
    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this. author = author;
        this.editorial = editorial
    }

    // getters y setters para todos los atributos privados
    // title
    public getTitle(): string { return this.title }
    public setTitle(title: string): void { this.title = title }
    // nPages
    public getNPages(): number { return this.nPages }
    public setNPages(nPages: number): void { this.nPages = nPages }
    // isbn
    public getIsbn(): string { return this.isbn }
    public setIsbn(isbn: string): void { this.isbn = isbn }
    // author
    public getAuthor(): string { return this.author }
    public setAuthor(author: string): void { this.author = author }
    // editorial
    public getEditorial(): string { return this.editorial }
    public setEditorial(editorial: string): void { this.editorial = editorial }
    
    // Métodos
    public toString(): string {
        let result: string = `Title - ${this.title}\nNumber of Pages - ${this.nPages}\n`;
        result += `ISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}`;
        return result;
    }
}