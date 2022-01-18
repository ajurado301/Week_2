
// Clase Person
class Person {

    // Constructor
    constructor(peso, altura, yearOfBirth, hobbies) {
        this.peso = peso;
        this.altura = altura;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
        this.nombre = "";
        this.apellidos = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
        this.colorPelo = "";
        this.colorOjos = "";
        this.Sexo = ""
    }

    // Método para calcular el IMC
    calcIMC() {
        return Math.round((this.peso / Math.pow(this.altura, 2) * 10000) * 10) / 10
    }

    // Método edad
    edad() {
        // Calculamos la edad a partir de su año de nacimiento (solo con el año)
        let anyoActual = new Date().getFullYear();
        return anyoActual - this.yearOfBirth;
    }

    // Método printAll
    printAll() {
        for(let atributo in this) {
            console.log(atributo + ":", this[atributo]);
        }
    }

    // Método printHobbies
    printHobbies() {
        this.hobbies.forEach((hobbie) => {
            console.log(hobbie);
        });
    }
}

// Esprotar la clase Person
module.exports = {
    Person
}