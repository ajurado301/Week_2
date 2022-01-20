// Función signoZodiacal
export function signoZodiacal(fecha: Date): string {
    let result: string = "";
    let mes: number = fecha.getMonth() + 1;
    let dia: number = fecha.getDate();    
    switch (mes) {
        case 1 : result = (dia <=20) ? "Capricornio" : "Acuario"    ; break; // 1 - Enero      (Capricornio : 22 de diciembre  – 20 de enero)
        case 2 : result = (dia <=18) ? "Acuario"     : "Piscis"     ; break; // 2 - Febrero    (Acuario     : 21 de enero      – 18 de febrero)
        case 3 : result = (dia <=20) ? "Piscis"      : "Aries"      ; break; // 3 - Marzo      (Piscis      : 19 de febrero    – 20 de marzo)
        case 4 : result = (dia <=20) ? "Aries"       : "Tauro"      ; break; // 4 - Abril      (Aries       : 21 de marzo      – 20 de abril)
        case 5 : result = (dia <=21) ? "Tauro"       : "Géminis"    ; break; // 5 - Mayo       (Tauro       : 21 de abril      – 21 de mayo)
        case 6 : result = (dia <=21) ? "Géminis"     : "Cáncer"     ; break; // 6 - Junio      (Géminis     : 22 de mayo       – 21 de junio)
        case 7 : result = (dia <=22) ? "Cáncer"      : "Leo"        ; break; // 7 - Julio      (Cáncer      : 22 de junio      – 22 de julio)
        case 8 : result = (dia <=22) ? "Leo"         : "Virgo"      ; break; // 8 - Agosto     (Leo         : 23 de julio      – 22 de agosto)
        case 9 : result = (dia <=22) ? "Virgo"       : "Libra"      ; break; // 9 - Septiembre (Virgo       : 23 de agosto     – 22 de septiembre)
        case 10: result = (dia <=22) ? "Libra"       : "Escorpio"   ; break; // 10- Octuber    (Libra       : 23 de septiembre – 22 de octubre)
        case 11: result = (dia <=22) ? "Escorpio"    : "Sagitario"  ; break; // 11- Nombiembre (Escorpio    : 23 de octubre    – 22 de noviembre)
        case 12: result = (dia <=21) ? "Sagitario"   : "Capricornio"; break; // 12- Diciembre  (Sagitario   : 23 de noviembre  – 21 de diciembre)
    }
    return result;
}

