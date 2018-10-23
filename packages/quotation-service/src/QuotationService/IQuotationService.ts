import { Quotation } from "./";

export interface IQuotationService {
    getQuotation: () => Promise<Quotation>;
}
