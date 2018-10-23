import { Quotation } from "./Quotation";

export interface IQuotationService {
    getQuotation: () => Promise<Quotation>;
}
