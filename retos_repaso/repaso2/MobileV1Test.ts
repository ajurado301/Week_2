import { MobileV1 } from './mobileV1';

// Instanciar
let Nokia3210: MobileV1 = new MobileV1("Nokia3210", "3210", "Nokia", 16, "Black", false, 2, 550);
let iPhone3G: MobileV1 = new MobileV1("iPhone3G", "3G", "Apple", 4, "White", false, 1, 240);
let SamsungGalaxy10: MobileV1 = new MobileV1("Samsung Galaxy 10", "Galaxy 10", "Samsung", 32, "Blue", true, 3, 815);

// Mostrar datos

// Imprimir de uno en uno todos los datos
// Nokia3210
console.log("\nDatos de Nokia3210:")
console.log("Nombre:", Nokia3210.name);
console.log("Modelo:", Nokia3210.model);
console.log("Marca:", Nokia3210.trademark);
console.log("Tamaño SD:", Nokia3210.sdSize);
console.log("Color:", Nokia3210.color);
console.log("Tecnología 5G:", Nokia3210.is5G);
console.log("Número de cámaras:", Nokia3210.cameraNumber);
console.log("Precio:", Nokia3210.price);
// iPhone3G
console.log("\nDatos de iPhone3G:")
console.log("Nombre:", iPhone3G.name);
console.log("Modelo:", iPhone3G.model);
console.log("Marca:", iPhone3G.trademark);
console.log("Tamaño SD:", iPhone3G.sdSize);
console.log("Color:", iPhone3G.color);
console.log("Tecnología 5G:", iPhone3G.is5G);
console.log("Número de cámaras:", iPhone3G.cameraNumber);
console.log("Precio:", iPhone3G.price);
// mobiSamsungGalaxy10le
console.log("\nDatos de SamsungGalaxy10:")
console.log("Nombre:", SamsungGalaxy10.name);
console.log("Modelo:", SamsungGalaxy10.model);
console.log("Marca:", SamsungGalaxy10.trademark);
console.log("Tamaño SD:", SamsungGalaxy10.sdSize);
console.log("Color:", SamsungGalaxy10.color);
console.log("Tecnología 5G:", SamsungGalaxy10.is5G);
console.log("Número de cámaras:", SamsungGalaxy10.cameraNumber);
console.log("Precio:", SamsungGalaxy10.price);

// Modificar Nokia3210
Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;

// Mostramos todo de nuevo
// Nokia3210
console.log("\nDatos de Nokia3210:")
console.log("Nombre:", Nokia3210.name);
console.log("Modelo:", Nokia3210.model);
console.log("Marca:", Nokia3210.trademark);
console.log("Tamaño SD:", Nokia3210.sdSize);
console.log("Color:", Nokia3210.color);
console.log("Tecnología 5G:", Nokia3210.is5G);
console.log("Número de cámaras:", Nokia3210.cameraNumber);
console.log("Precio:", Nokia3210.price);
// iPhone3G
console.log("\nDatos de iPhone3G:")
console.log("Nombre:", iPhone3G.name);
console.log("Modelo:", iPhone3G.model);
console.log("Marca:", iPhone3G.trademark);
console.log("Tamaño SD:", iPhone3G.sdSize);
console.log("Color:", iPhone3G.color);
console.log("Tecnología 5G:", iPhone3G.is5G);
console.log("Número de cámaras:", iPhone3G.cameraNumber);
console.log("Precio:", iPhone3G.price);
// mobiSamsungGalaxy10le
console.log("\nDatos de SamsungGalaxy10:")
console.log("Nombre:", SamsungGalaxy10.name);
console.log("Modelo:", SamsungGalaxy10.model);
console.log("Marca:", SamsungGalaxy10.trademark);
console.log("Tamaño SD:", SamsungGalaxy10.sdSize);
console.log("Color:", SamsungGalaxy10.color);
console.log("Tecnología 5G:", SamsungGalaxy10.is5G);
console.log("Número de cámaras:", SamsungGalaxy10.cameraNumber);
console.log("Precio:", SamsungGalaxy10.price);