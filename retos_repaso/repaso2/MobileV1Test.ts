import { MobileV1 } from './mobileV1';

// Instanciar
let mobile1: MobileV1 = new MobileV1("Nokia3210", "3210", "Nokia", 16, "Black", true, 2, 550);
let mobile2: MobileV1 = new MobileV1("iPhone3G", "3G", "Apple", 4, "White", false, 1, 240);
let mobile3: MobileV1 = new MobileV1("Samsung Galaxy 10", "Galaxy 10", "Samsung", 32, "Blue", true, 3, 815);

// Mostrar datos
console.log("\nDatos de mobile1:")
mobile1.printMobile();
console.log("\nDatos de mobile2:")
mobile2.printMobile();
console.log("\nDatos de mobile3:")
mobile3.printMobile();