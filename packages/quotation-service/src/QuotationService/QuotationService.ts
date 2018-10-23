import { IQuotationStrategy } from "./Strategies";
import { IQuotationService } from "./";


export class QuotationService implements IQuotationService {

    constructor(private strategy: IQuotationStrategy) { }

    public getQuotation() {
        return this.strategy.getQuotation()
    }
}

