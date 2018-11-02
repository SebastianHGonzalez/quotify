import { Currency, Quotation } from "@sebastianhgonzalez/quotation-service";
import { IQuotationsClient } from "./IQuotationsClient";

export class QuotationMockClient implements IQuotationsClient {
  public getQuotation(currency: Currency): Promise<Quotation> {
    return Promise.resolve({
        baseCurrency: "ARS",
        buyer: 1,
        seller: 1,
        targetCurrency: "USD",
        updatedAt: new Date(Date.now())
    });
  }
}
