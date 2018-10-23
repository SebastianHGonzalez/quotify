import { Quotation } from "./Quotation";

export interface IQuotationStrategy {

    getQuotation: () => Promise<Quotation>;
}
