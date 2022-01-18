
// Clase Contacts
class Contacts {

    // Constructor
    constructor() {
        this.persons = [];
    }

    // Método printPersons
    printPersons() {
        this.persons.forEach((person, indice) => {
            console.log("\nAtributos y valores para el elemento: ", indice);
            for(let atributo in person) {
                console.log(atributo + ":", person[atributo]);                
            };
        })
    }
}

module.exports = {
    Contacts
}