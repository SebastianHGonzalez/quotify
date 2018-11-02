import { Currency, Quotation } from "@sebastianhgonzalez/quotation-service";
import { IQuotationsClient } from "./IQuotationsClient";

type ICurrencyEndpoints = { [currency in Currency]: string };

const endpoints: ICurrencyEndpoints = {
  ARS: "/Pesos/quote",
  BRL: "/Real/quote",
  USD: "/Dolar/quote"
};

export class QuotationClient implements IQuotationsClient {
  constructor(public http: any) {}

  public getQuotation(currency: Currency): Promise<Quotation> {
    return this.http
      .get(this.currencyEndpoint(currency))
      .then(({ data }: { data: Quotation }) => data)
  }

  public currencyEndpoint(currency: Currency) {
    return endpoints[currency];
  }
}
