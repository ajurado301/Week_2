// Clase MobileV1
export class MobileV2 {
    // Atributos públicos
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

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

    // getters y setters
    // name
    public getName(): string { return this.name };
    public setName(name: string): void { this.name = name };
    // model
    public getModel(): string { return this.model };
    public setModel(model: string): void { this.model = model };
    // trademark
    public getTrademark(): string { return this.trademark};
    public setTrademark(trademark: string): void { this.trademark = trademark };
    // sdSize
    public getSdSize(): number { return this.sdSize };
    public setSdSize(sdSize: number): void { this.sdSize = sdSize };
    // color    
    public getColor(): string { return this.color };
    public setColor(color: string): void { this.color = color };
    // is5G
    public getIs5G(): boolean { return this.is5G };
    public setIs5G(is5G: boolean): void { this.is5G = is5G };
    // cameraNumber
    public getCameraNumber(): number { return this.cameraNumber };
    public setCameraNumber(cameraNumber: number): void { this.cameraNumber = cameraNumber };
    // price
    public getPrice(): number { return this.price };
    public setPrice(price: number): void { this.price = price };

    // Método
    public printMobile(): void {
        console.log(`The characteristics of the mobile ${this.name} are:`)
        console.log("\t■ Name:", this.name);
        console.log("\t■ Model:", this.model);
        console.log("\t■ Trademark:", this.trademark);
        console.log("\t■ SD Size (GB):", this.sdSize);
        console.log("\t■ Color:", this.color);
        console.log("\t■ Is 5G?:", this.is5G);
        console.log("\t■ Number of Cameras:", this.cameraNumber);
    }
}