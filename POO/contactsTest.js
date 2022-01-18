// Importar clases (¿Se hace así? perguntar a los profes)
let moduloPerson = require('./person');
let moduloContacts = require('./contacts');

// Instanciar clases Person y Contacts (varias objetos de person para agregar al objeto contacts)
let persona1 = new moduloPerson.Person(61, 165, 1969, ["Montañismo", "Esquiar", "Leer"]);
let persona2 = new moduloPerson.Person(75, 175, 1967, ["Correr", "Dormir", "Viajar"]);
let persona3 = new moduloPerson.Person(71, 173, 2006, ["Comer", "Pasear", "Leer"]);
let persona4 = new moduloPerson.Person(58, 155, 2009, ["Nadar", "Patinar", "Correr"]);

let contactos = new moduloContacts.Contacts();

// Añadir los objetos personas al objeto contactos
contactos.persons = [persona1, persona2, persona3, persona4];

// Invocar al método printPersons() para mostrar los atributos y valores de todos le elementos del atributo persons del objeto contactos
contactos.printPersons();

// Se me ocurre que también se pueden invocar métodos de la calse Person desde el objeto contactos (por ejemplo edad()))
console.log("\nInvocando el método edad desde el objeto contactos");
contactos.persons.forEach((persona) => {
    console.log("Edades:", persona.edad());
})