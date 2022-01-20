import { MobileV2 } from "../repaso2/mobileV2";
import { MobileLibrary } from './mobileLibrary';

// Instanciar
let Nokia3210: MobileV2 = new MobileV2("Nokia3210", "3210", "Nokia", 16, "Black", false, 2, 550);
let iPhone3G: MobileV2 = new MobileV2("iPhone3G", "3G", "Apple", 4, "White", false, 1, 240);
let SamsungGalaxy10: MobileV2 = new MobileV2("Samsung Galaxy 10", "Galaxy 10", "Samsung", 32, "Blue", true, 3, 815);
let XiaomiRedmi10 = new MobileV2("Xiaomi Redmi 10", "Redmi 10", "Xiaomi", 64, "Gray", false, 4, 182);

// Crear array
let mobiles: MobileV2[] = [Nokia3210, iPhone3G, SamsungGalaxy10, XiaomiRedmi10];

// Instanciar
// Lo construyo sin móviñes y luego los meto con el setter
let miLibreria: MobileLibrary = new MobileLibrary("Mi libreria de móviles", "Azkoitia", []);

// Probar getters y setters
console.log(miLibreria.getName());
miLibreria.setName("Mis móviles");
console.log(miLibreria.getName());
console.log(miLibreria.getLocation());
miLibreria.setLocation("Madrid");
console.log(miLibreria.getLocation());
console.log(miLibreria.getMobiles());
miLibreria.setMobiles(mobiles);
console.log(miLibreria.getMobiles());

// Método
console.log(miLibreria.totalPriceCalculation());
