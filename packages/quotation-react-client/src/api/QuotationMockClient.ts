import { Currencies, Currency } from "@sebastianhgonzalez/quotation-service";
import { IQuotations, IQuotationsClient } from "./IQuotationsClient";

export class QuotationMockClient implements IQuotationsClient {
  public getQuotations(currencies: Currency[]): Promise<IQuotations> {
    return Promise.resolve({
      [Currencies.ARS]: {
        baseCurrency: "ARS",
        buyer: 1,
        seller: 1,
        targetCurrency: "USD",
        updatedAt: new Date(Date.now())
      },
      [Currencies.USD]: {
        baseCurrency: "ARS",
        buyer: 10,
        seller: 11,
        targetCurrency: "USD",
        updatedAt: new Date(Date.now() + 100000)
      }
    });
  }
}
