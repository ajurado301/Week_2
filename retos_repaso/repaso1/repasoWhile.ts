// Función continente
export function continente(pais: string): string {
    let result: string = "No encontrado";
    let continentes: string[] = ["Asia", "Africa", "América", "Europa", "Oceanía"];
    let arrayPaises: string [][] = [
        ["China", "Birmania", "Filipinas", "Nepal", "Vietnam"],
        ["Kenia", "Namibia", "Nigeria", "Tanzania", "Zambia"],
        ["Argentina", "Brasil", "Honduras", "Canadá", "Estados Unidos"],
        ["Francia", "Italia", "España", "Alemania", "Bélgica"],
        ["Australia", "Nueva Zelanda", "Tonga", "Samoa", "Micronesia"],
    ];
    let i: number = 0;
    while (i < arrayPaises.length && result == "No encontrado") {
        if(arrayPaises[i].includes(pais)) {
            result = continentes[i];
        };
        i++;
    };
    return result;
}

// Función contienePar
export function contienePar(arrayNumeros: number[]): boolean {
    let result: boolean = false;
    let i: number = 0;
    while (i < arrayNumeros.length && result == false) {
        if (arrayNumeros[i] % 2 == 0) {
            result = true;
        }
        i++;
    };
    return result;
}
