// Importamos clase Person y Contacts
import { Person } from './person';
import { Contacts } from './contacts';

// Creamos 2 personas (Person)
let persona1: Person = new Person("Juan", 36, "Una calle, 18");
let persona2: Person = new Person("Pedro", 38, "Una plaza, 3");

// Creamos una agenda (Contacts)
let agenda: Contacts = new Contacts();

// Inicializamos su atributo público (Person[])
agenda.people = [persona1, persona2];

// Llamamos al método para mostrar todos los contactos
agenda.printCalendar();