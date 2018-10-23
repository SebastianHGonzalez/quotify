export class Quotation {

    constructor(
        public targetCurrency: string,
        public baseCurrency: string,
        public buyer: number,
        public seller: number,
        public updatedAt: Date
    ) {

    }
}
