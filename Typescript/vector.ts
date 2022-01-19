
// Clase Vector
export class Vector {

    // Atributos
    private elements: number[];

    // Constructor
    constructor(n: number, k:number) {
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.round(Math.random() * k));
        };
    }

    // getter y setter
    public getElements(): number[] { return this.elements };
    public setElements(elements: number[]): void { this.elements = elements };

    // Métodos públicos
    // print
    public print(): void {
        console.log(this.elements);
    }    
    // add
    public add(v1: Vector): Vector {
        let v1Elements: number[] = v1.getElements();
        let result: Vector = new Vector(0, 0);
        if(this.elements.length == v1Elements.length) { // solo si las longitudes son iguales
            result.setElements(this.elements.map((valor, indice) => {
                return valor + v1Elements[indice];
            }));
        };
        return result;
    }
    // subs
    public subs(v1: Vector): Vector {
        let v1Elements: number[] = v1.getElements();
        let result: Vector = new Vector(0, 0);
        if(this.elements.length == v1Elements.length) { // solo si las longitudes son iguales
            result.setElements(this.elements.map((valor, indice) => {
                return valor - v1Elements[indice];
            }));
        };
        return result;
    }
    // mult
    public mult(v1: Vector): Vector {
        let v1Elements: number[] = v1.getElements();
        let result: Vector = new Vector(0, 0);
        if(this.elements.length == v1Elements.length) { // solo si las longitudes son iguales
            result.setElements(this.elements.map((valor, indice) => {
                return valor * v1Elements[indice];
            }));
        };
        return result;
    }
    // multNumber
    public multNumber(n: number): Vector {
        let result: Vector = new Vector(0,0);
        result.setElements(this.elements.map((valor) => {
            return valor * n
        }));
        return result;
    }
}
