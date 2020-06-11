export class Product {
// the publicly accessible properties will be made itself by nest, no need to declare the data will be stored into the properties
    constructor(
        public id: string, 
        public title: string,
        public desc: string,
        public price: number
        ) {}
}

