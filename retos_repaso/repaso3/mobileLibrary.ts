import { MobileV2 } from '../repaso2/mobileV2';

// Clase MobileLibrary
export class MobileLibrary {
    
    // Atributos
    private name: string;
    private location: string;
    private mobiles: MobileV2[];
    private totalPrice: number;

    //Constructor
    constructor(name: string, location: string, mobiles: MobileV2[]) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = 0;
    }

    // getters y setters
    // name
    public getName(): string { return this.name };
    public setName(name: string): void { this.name = name };
    // location
    public getLocation(): string { return this.location };
    public setLocation(location: string): void { this.location = location };
    // mobiles
    public getMobiles(): MobileV2[] { return this.mobiles };
    public setMobiles(mobiles: MobileV2[]): void { this.mobiles = mobiles };
    // totalPrice
    public getTotalPrice(): number { return this.totalPrice };
    public setTotalPrice(totalPrice: number): void { this.totalPrice = totalPrice };

    // Método público
    public totalPriceCalculation(): number {
        let result: number = 0;
        this.mobiles.forEach((mobile) => {
            return result += mobile.getPrice();
        })
        return result;
    }
}