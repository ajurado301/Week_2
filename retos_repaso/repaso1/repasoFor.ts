// Función mostrarImpares
export function mostrarImpares(n: number):void {
    let result: string = "- ";
    for (let i: number = 1; i <= n; i++) {
        result += (i % 2 != 0) ? i.toString() + " - " : ""
    };
    console.log(result);
}

// Función arrayInvertido (como el enunciado no indica tipo uso any)
export function arrayInvertido(array: any[]): any[] {
    let result: any[] = array;
    let l: number = array.length -1;
    for (let i: number = 0; i < l / 2; i++) {
        [result[i], result[l-i]] = [result[l-i], result[i]];
    };
    return result;
}

// Función colorEnArcoiris
export function colorEnArcoiris(arrayColores: string[]): void {
    let coloresArcoiris: string[] = ["Rojo", "Naranja", "Amarillo", "Verde", "Añil", "Indigo", "Azul", "Violeta"]; // Añil e Indigo es el mismo    
    console.log("Los siguientes están en el arcoiris:")
    console.log(arrayColores.filter((color) => {
            return coloresArcoiris.includes(color);
    }));
}

// Función sumaCaracteres
export function sumaCaracteres(arrayPalabras: string[]): number {
    let result: number = 0;
    for(let palabra of arrayPalabras){
        result += palabra.length;
    }
    return result;
}

//Functión muestraParImpar
export function muestraParImpar(numero: number): void {
    console.log((numero % 2 == 0) ? "El número es par." : "El número es impar");
}
