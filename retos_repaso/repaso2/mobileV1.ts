// Clase MobileV1
export class MobileV1 {
    // Atributos públicos
    public name: string;
    public model: string;
    public trademark: string;
    public sdSize: number;
    public color: string;
    public is5G: boolean;
    public cameraNumber: number;
    public price: number;

    // Constructor
    constructor(name: string, model: string, trademark: string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price: number) {
    this.name = name;
    this.model = model;
    this.trademark = trademark;
    this.sdSize = sdSize;
    this.color = color;
    this.is5G = is5G;
    this.cameraNumber = cameraNumber;
    this.price = price;
    }

    // Método
    public printMobile(): void {
        console.log("Nombre:", this.name);
        console.log("Modelo:", this.model);
        console.log("Marca:", this.trademark);
        console.log("Tamaño SD:", this.sdSize);
        console.log("Color:", this.color);
        console.log("Tecnología 5G:", this.is5G);
        console.log("Número de cámaras:", this.cameraNumber);
        console.log("Precio:", this.price);
    }
}