// Clase Punto
export class Punto {

    // Atributos
    private x: number;
    private y: number;

    // Constructor
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    // getters y setters
    // x
    public getX(): number { return this.x };
    public setX(x: number): void { this.x = x };
    // y
    public getY(): number { return this.y };
    public setY(y: number): void { this.y = y };

    // Métodos públicos
    // toString
    public toString(): string {
        let result: string = "";
        result = `(${this.x}, ${this.y})`;
        return result;
    }
    // distanciaAlOrigen
    public distanciaAlOrigen(): number {
        let result: number = 0;
        // Pitágoras: hipotenusa = raiz cuadrada de la suma de los cuadrados de los catetos (triangulo rectangulo)
        result = Math.sqrt(((0 - this.x) ** 2) + ((0 - this.y) ** 2));
        return result;
    }
    // calcularDistancia
    public calcularDistancia(otroPunto: Punto): number {
        let result: number = 0;
        // Pitágoras: hipotenusa = raiz cuadrada de la suma de los cuadrados de los catetos (triangulo rectangulo)
        result = Math.sqrt(((this.x - otroPunto.getX()) ** 2) + ((this.y - otroPunto.getY()) ** 2));
        return result;
    }
    // calcularCuadrante
    public calcularCuadrante(): number {
        let result: number = 0; // Por defecto asumimos que está en (0, 0) o sobre algún eje
        switch (true) {
            case (this.x > 0 && this.y > 0): result = 1; break;
            case (this.x < 0 && this.y > 0): result = 2; break;
            case (this.x < 0 && this.y < 0): result = 3; break;
            case (this.x > 0 && this.y < 0): result = 4; break;
        };
        return result;
    }
    // calcularMasCercano
    public calcularMasCercano(puntos: Punto[]): Punto {
        let result: Punto = this; // si el array de puntos viene vacío devolveremos el propio punto this
        if (puntos.length > 0) {  // si tiene datos iteramos
            // Establecemos el primer punto como punto y distancia más cercana y si hay alguno más cercano el forEach lo actualizará
            let menorDistancia: number = this.calcularDistancia(puntos[0]);
            result = puntos[0];
            puntos.forEach((punto) => {
                let distancia: number = this.calcularDistancia(punto);
                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    result = punto;
                };
            });
        };
        return result;
    }
}