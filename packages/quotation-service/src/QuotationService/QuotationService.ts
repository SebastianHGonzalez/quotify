import { IQuotationStrategy } from "./IQuotationStrategy";
import { IQuotationService } from "./IQuotationService";


export class QuotationService implements IQuotationService {

    constructor(private strategy: IQuotationStrategy) { }

    public getQuotation() {
        return this.strategy.getQuotation()
    }
}

