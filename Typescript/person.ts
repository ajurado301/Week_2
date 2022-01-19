
// Clase Person
export class Person {
    
    // Atributos
    public name: string;
    public age: number;

    private address: string;

    // Constructor
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Métodos públicos
    public printName(): void {
        console.log(this.name);
    }

    public yearOfBirth(currentYear: number): number {
        return currentYear - this.age;
    }

    public setAddress(address: string): void { // setter para el atributo privado
        this.address = address;
    }

    public getAddress(): string { // getter para el atributo privado
        return this.address
    }
}
