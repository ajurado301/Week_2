
// importamos la clase
import { Person } from './person'

// Instanciamos
let miPersona: Person = new Person("Pedro", 38, "Mayor, 18 - 2ºB");

// Pruebas con los atributos
// Mostrar name
console.log(miPersona.name); // directamente mostramos el atributo por ser público
miPersona.name = "Juan"; // lo podemos cambiar directamente por ser público
console.log(miPersona.name);
// Mostrar age
console.log(miPersona.age); // directamente mostramos el atributo por ser público
miPersona.age = 26; // lo podemos cambiar directamente por ser público
console.log(miPersona.age);
// El atributo address no se puede mostrar ni modificar directamente por ser private

// Pruebas con los métodos
miPersona.printName(); // mostrar name través del método público con ese proposito
console.log(miPersona.yearOfBirth(2022)); // mostramos la fecha de nacimiento invocando su método
console.log(miPersona.getAddress()); // mostramos el valor del atributo privado a través de su getter
miPersona.setAddress("Paseo de la Castellana, 98 - 3ºA"); // cambiamos el valor del atributo privado a través de su setter
console.log(miPersona.getAddress());
