export class Product {
    id: number;
    pName: string;
    pDescription: string;
    pImagePath: string;
    pManufacturer: string;
    pPrice: number;
    pQuantity: number;

    constructor(
        private pid?: number,
        private name?: string,
        private description?: string,
        private imagepath?: string,
        private manu?: string,
        private price?: number,
        private qty?: number
    ) {
        this.id = pid;
        this.pName = name;
        this.pDescription = description;
        this.pImagePath = imagepath;
        this.pManufacturer = manu;
        this.pPrice = price;
        this.pQuantity = qty;
    }
}
