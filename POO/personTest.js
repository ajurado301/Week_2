// Importar clase (¿Se hace así? perguntar a los profes)
let moduloPerson = require('./person');

// Instanciar un objeto Person con peso y altura (inicializados por el constructor)
let persona = new moduloPerson.Person(72, 172);
    
// Inicializar la fecha de nacimento y el array de hobbies con 3 hobbies desde el objeto ya instanciado
// Aquí podríamos tambien inicializar los atributos que necesitemos y que hayan sido inicializados por el constructor
persona.yearOfBirth = 1967;
persona.hobbies = ["Nadar", "Patinar", "Leer"];

// Mostrar todos los atributos mediante el metodo printAll()
console.log("\nProbando el método printAll()\n");
persona.printAll();

// Probar los métodos calcIMC, edad y print
console.log("\nProbando el método calcIMC()\n");
console.log(persona.calcIMC());
console.log("\nProbando el método edad()\n");
console.log(persona.edad());
console.log("\nProbando el método printHobbies()\n");
persona.printHobbies();

