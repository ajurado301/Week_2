import { MobileV2 } from './mobileV2';

// Instanciar
let Nokia3210: MobileV2 = new MobileV2("Nokia3210", "3210", "Nokia", 16, "Black", false, 2, 550);
let iPhone3G: MobileV2 = new MobileV2("iPhone3G", "3G", "Apple", 4, "White", false, 1, 240);
let SamsungGalaxy10: MobileV2 = new MobileV2("Samsung Galaxy 10", "Galaxy 10", "Samsung", 32, "Blue", true, 3, 815);

// Mostrar datos (con getters)
// Imprimir de uno en uno todos los datos
// Nokia3210
console.log("\nDatos de Nokia3210:")
console.log("Nombre:", Nokia3210.getName());
console.log("Modelo:", Nokia3210.getModel());
console.log("Marca:", Nokia3210.getTrademark());
console.log("Tamaño SD:", Nokia3210.getSdSize());
console.log("Color:", Nokia3210.getColor());
console.log("Tecnología 5G:", Nokia3210.getIs5G());
console.log("Número de cámaras:", Nokia3210.getCameraNumber());
console.log("Precio:", Nokia3210.getPrice());
// iPhone3G
console.log("\nDatos de iPhone3G:")
console.log("Nombre:", iPhone3G.getName());
console.log("Modelo:", iPhone3G.getModel());
console.log("Marca:", iPhone3G.getTrademark());
console.log("Tamaño SD:", iPhone3G.getSdSize());
console.log("Color:", iPhone3G.getColor());
console.log("Tecnología 5G:", iPhone3G.getIs5G());
console.log("Número de cámaras:", iPhone3G.getCameraNumber());
console.log("Precio:", iPhone3G.getPrice());
// mobiSamsungGalaxy10le
console.log("\nDatos de SamsungGalaxy10:")
console.log("Nombre:", SamsungGalaxy10.getName());
console.log("Modelo:", SamsungGalaxy10.getModel());
console.log("Marca:", SamsungGalaxy10.getTrademark());
console.log("Tamaño SD:", SamsungGalaxy10.getSdSize());
console.log("Color:", SamsungGalaxy10.getColor());
console.log("Tecnología 5G:", SamsungGalaxy10.getIs5G());
console.log("Número de cámaras:", SamsungGalaxy10.getCameraNumber());
console.log("Precio:", SamsungGalaxy10.getPrice());

// Modificar Nokia3210 (con setters)
Nokia3210.setIs5G(true);
Nokia3210.setCameraNumber(4);

// Mostramos todo de nuevo
// Nokia3210
console.log("\nDatos de Nokia3210:")
console.log("Nombre:", Nokia3210.getName());
console.log("Modelo:", Nokia3210.getModel());
console.log("Marca:", Nokia3210.getTrademark());
console.log("Tamaño SD:", Nokia3210.getSdSize());
console.log("Color:", Nokia3210.getColor());
console.log("Tecnología 5G:", Nokia3210.getIs5G());
console.log("Número de cámaras:", Nokia3210.getCameraNumber());
console.log("Precio:", Nokia3210.getPrice());
// iPhone3G
console.log("\nDatos de iPhone3G:")
console.log("Nombre:", iPhone3G.getName());
console.log("Modelo:", iPhone3G.getModel());
console.log("Marca:", iPhone3G.getTrademark());
console.log("Tamaño SD:", iPhone3G.getSdSize());
console.log("Color:", iPhone3G.getColor());
console.log("Tecnología 5G:", iPhone3G.getIs5G());
console.log("Número de cámaras:", iPhone3G.getCameraNumber());
console.log("Precio:", iPhone3G.getPrice());
// mobiSamsungGalaxy10le
console.log("\nDatos de SamsungGalaxy10:")
console.log("Nombre:", SamsungGalaxy10.getName());
console.log("Modelo:", SamsungGalaxy10.getModel());
console.log("Marca:", SamsungGalaxy10.getTrademark());
console.log("Tamaño SD:", SamsungGalaxy10.getSdSize());
console.log("Color:", SamsungGalaxy10.getColor());
console.log("Tecnología 5G:", SamsungGalaxy10.getIs5G());
console.log("Número de cámaras:", SamsungGalaxy10.getCameraNumber());
console.log("Precio:", SamsungGalaxy10.getPrice());

// Crear array de mobiles
let arrayMobiles: MobileV2[] = [Nokia3210, iPhone3G, SamsungGalaxy10];

// Mostrar array con el método printMobile
arrayMobiles.forEach((mobile) => {
    mobile.printMobile();
})