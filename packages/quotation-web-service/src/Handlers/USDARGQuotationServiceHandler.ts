import Axios from "axios";

import { config } from "../config";

import { QuotationService, USDARGQuotationStrategy, Quotation } from "@sebastianhgonzalez/quotation-service";


export function USDARGQuotationServiceHandler(req: any, res: any) {
    const http = Axios.create({ baseURL: config.quotationBaseUrl });
    const quotationStrategy = new USDARGQuotationStrategy(http);
    const quotationService = new QuotationService(quotationStrategy);

    quotationService.getQuotation().then((quotation: Quotation) => res.json(quotation));
}
