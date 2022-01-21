import { Punto } from "./punto";

// Clase trángulo
export class Triangulo {

    // Atributos privados
    private vertice1: Punto;
    private vertice2: Punto;
    private vertice3: Punto;

    // Constructor
    constructor(vertice1: Punto, vertice2: Punto, vertice3: Punto) {
        this.vertice1 = vertice1
        this.vertice2 = vertice2
        this.vertice3 = vertice3
    }

    // getters y setters
    // vertice1
    public getVertice1(): Punto { return this.vertice1 };
    public setVertice1(vertice: Punto): void { this.vertice1 = vertice };
    // vertice2
    public getVertice2(): Punto { return this.vertice2 };
    public setVertice2(vertice: Punto): void { this.vertice2 = vertice };
    // vertice3
    public getVertice3(): Punto { return this.vertice3 };
    public setVertice3(vertice: Punto): void { this.vertice3 = vertice };

    // Métodos
    // calcularLongitudLados
    public calcularLongitudLados(): number[] {
        let result: number[] = [];
        result.push(this.vertice1.calcularDistancia(this.vertice2));
        result.push(this.vertice2.calcularDistancia(this.vertice3));
        result.push(this.vertice3.calcularDistancia(this.vertice1));
        return result;
    }
}